const Order = require('../models/order');
const Airline = require('../models/airline')
// const { search } = require('../routes/mainRouter'); ???? what the?? where did it come from? This made Circular dependency warning error.
const loadDB = require('../services/dataLoadfromDB');  //Services to load DB
const title = require('../utils/title');


// [GET] /main/airlineSearch. Open airline search page.
// If it has searchData from req.query, it searches airline information on the same page.
module.exports.airlineListGet = async function (req, res) {
    title('main/airlineSearch (GET) route');

    console.log('res.locals.currentUser!!')
    console.log(res.locals.currentUser);
    console.log('------ currentUser!! -----')


    const { searchData } = req.query;
    let filteredData = '';

    // airline searching logic
    if (searchData) {
        const data = await loadDB.airlineListLoadFromDB();
        const airlines = data.rows;
        // searching logic (startwith, endwith, include, ...)
        filteredData = airlines.filter((el) => {
            if (
                el.Name.toLowerCase().startsWith(searchData.toLowerCase()) ||
                el.Name.toLowerCase().endsWith(searchData.toLowerCase()) ||
                el.Name.toLowerCase().includes(searchData.toLowerCase()) ||
                el.Code.toLowerCase().includes(searchData.toLowerCase())
            ) {
                return true;
            }
            return false;
        })

        console.log('filtered');
        console.log(filteredData)

    } else {
        console.log('no searched data')
    }

    //Load airline list saved in my DB
    const airlineList = await Airline.find({});

    res.render('airlineSearch', { filteredData, airlineList });
};


// [POST] /main/airlineSearch : when you click add button to add airline to the master database,
// it will add the information you selected into the master db along with logo img for the airline.
module.exports.airlineListPost = async function (req, res) {
    title('/main/airlineSearch (POST) route');
    const { data } = req.body;
    console.log(`req.body.data === `);
    console.log(data);

    const savedData = await new Airline(data);

    const foundData = await loadDB.flightOperatorLoadDB(data.airline);
    const logo = 'https://s3.eu-central-1.amazonaws.com/images.flightradar24.com/assets/airlines/logotypes/' + foundData[0].detail.logo.slice(3, 100);
    savedData.logo = logo;
    await savedData.save();

    console.log(savedData);

    res.redirect('/main/airlineSearch');
    // res.render('airlineSearch', { savedData })
};


// [GET] main/search //: Open search page. 
// Also, if there is searchData via GET route with query data, it searches flt info for today.
module.exports.searchGet = async function (req, res) {
    title('/main/search (Get) Route');

    console.log(`req.query:`);
    console.log(req.query)
    const { searchData } = req.query;
    let filteredData = '';
    let detailData;


    if (searchData) {
        console.log('Searched data exists, so it searches database');
        // API data load via the service that I created
        filteredData = await loadDB.flightListLoadFromDB(searchData);

        // filteredData has lots of fltApiId... loop the IDs and when it finds the matched one with detail flt id,
        // then, it saves the found data to be pushed into the filtered data.

        for (let i = 0; i < filteredData.length; i++) {
            detailData = await loadDB.detailFlightLoadFromDB(filteredData[i].id);
            if (filteredData[i].id == detailData.data.identification.id) {

                const flightInfo = {
                    origin: detailData.data.airport.origin.name,
                    destination: detailData.data.airport.destination.name,
                    departure: detailData.data.time.scheduled.departure,
                    arrival: detailData.data.time.scheduled.arriaval
                }
                // ***** Question!!!!! 1)

                Object.assign(filteredData[i], flightInfo)

                // airport.origin.name | airport.destination.name | 
                // time.scheduled.departure | time.scheduled.arrival
                // aircraft.model.code || aircraft.model.text || aircraft.registration.

                console.log('Match, saved it')
                console.log(filteredData[i].origin);
            }
        }
        // res.render('flightSearch', { filteredData });
    } else {
        console.log('No data from Search, no searching.');
        // res.render('flightSearch', { filteredData });
    }

    // filteredData.fltDetails = filteredDetailData

    console.log(filteredData);
    console.log('--------========*********_----=====')
    // console.log(filteredDetailData)

    res.render('flightSearch', { filteredData });
}


// from flightSearch.ejs
// module.exports.searchPost = async function (req, res) {
//     title('/main/search (Post) Route');
//     res.render('flightSearch');
// };


// [GET] main/search/flight_detail_and_order/:fltApiId 
// : To show detailed flight information along with order input, loading api data for the flight detailed info.
module.exports.detailFlightGET = async (req, res, next) => {
    title('/main/search/flight_detail_and_order/:fltApiId (GET) Route');

    const { fltApiId } = req.params;
    const { data, departure, arrival, today } = await loadDB.detailFlightLoadFromDB(fltApiId);
    const { icao } = data.airline.code;
    const foundAirline = await Airline.findOne({ icao });

    // It would be better if this part has pop up screen here to let people know what just happend.
    if (!foundAirline == '') {
        console.log('The airline for the selected flight exists in the master DB! :)')
    } else {
        console.log('No airline data exists in the master DB :(, please add the airline to the Master DB');
        return res.redirect('/main/airlineSearch');
    }

    console.log(data);

    res.render('flightDetail', { data, departure, arrival, today, foundAirline });
}


// [POST] main/search/flight_detail_and_order/:fltApiId  (from flightDetail.ejs)
// Once you click 'submit data' button, the below function will work to save order information along with airline info.
// In here, it needs to connect this data with the master airline data (new feature)***7/23
module.exports.detailFlightPost = async (req, res) => {
    title('/main/search/flight_detail_and_order/:fltApiId (POST) Route');

    // Need to streamline data here..

    console.log('REQ.BODY data && AIRLINE data below');
    console.log(req.body);
    const { fltApiId } = req.params;
    console.log(`API flt data id : ${fltApiId}`);
    const { fc, bc, pey, ey, date, details } = req.body.order;
    details.fltApiId = fltApiId;

    const { icao } = req.body;
    const found = await Airline.findOne({ icao });
    console.log('airline...');
    console.log(found);

    let flt = '';

    try {
        flt = await new Order({ fc, bc, pey, ey, date, details, airline: found._id });
        flt.save();
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }


    console.log('saved data is as follows ▼▼▼▼▼');
    console.log(flt);

    res.redirect('/main/dashboard'); // full address needed to be redirected to the right place you want
};

//To show order edit page
module.exports.orderEditGet = async (req, res) => {
    title('/main/dashboard/orderEdit (GET) route');
    const { orderDbId } = req.params;
    console.log(`orderDbId: ${orderDbId}`);

    const foundData = await Order.findById(orderDbId);
    console.log(foundData);

    // res.send('edit route works from dashboard');
    res.render('orderEdit', { foundData });
    // res.render('orderEdit');
};

//To save edited order information
module.exports.orderEditPost = async (req, res) => {
    title('/main/dashboard/orderEdit (POST) route');
    const { orderDbId } = req.params;
    const { order } = req.body;
    const updatedData = await Order.findByIdAndUpdate(orderDbId, order, { new: true });

    console.log('Updated Data Below')
    console.log(updatedData);

    res.redirect('/main/dashboard');
};

// [GET] main/dashboard  
// To show all the order information along with airline info for the day.
module.exports.dashboardGet = async (req, res, next) => {
    title('/main/dashboard (GET) route');

    let foundData = '';
    let { date } = req.query;

    if (!req.query.date == '') {
        console.log('There is searched Date');
        foundData = await Order.find({ date }).populate('airline');
    } else {
        console.log('Today date');
        date = new Date(); // get today's date
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();
        date = yyyy + '-' + mm + '-' + dd;
        foundData = await Order.find({ date }).populate('airline');
    }

    // console.log(foundData);

    res.render('dashBoard', { foundData, date });
};

// I think it doesn't need be POST route. plz use GET route by using search data from the same page.
// module.exports.dashboardPost = async (req, res) => {
//     title('/main/dashboard (POST) route');
//     res.render('dashBoard', { foundData, date });
// };

// module.exports.