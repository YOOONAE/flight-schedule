const Order = require('../models/order');
const Airline = require('../models/airline')
// const { search } = require('../routes/mainRouter'); ???? what the?? where did it come from? This made Circular dependency warning error.
const loadDB = require('../services/dataLoadfromDB');  //Services to load DB
const title = require('../utils/title');

// module.exports.


// [GET] /main/airlineSearch
module.exports.airlineListGet = async function (req, res) {
    title('main/airlineSearch (GET) route');
    console.log('req.query::::::::::');
    console.log(req.query); //이거 작동법 알았으니, 검색을 이걸로. post로 하지말고. post는 데이터 저장에 사용해볼것.
    const { searchData } = req.query;
    let filteredData = '';

    // airline searching logic
    if (searchData) {
        const data = await loadDB.airlineListLoadFromDB();

        console.log(data);
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
        // res.render('airlineSearch');
        console.log('no searched data')
    }

    //Load airline list saved in my DB
    const airlineList = await Airline.find({});
    console.log(airlineList);
    
    res.render('airlineSearch', { filteredData, airlineList });
};


// [POST] /main/airlineSearch
module.exports.airlineListPost = async function (req, res) {
    title('/main/airlineSearch (POST) route');
    console.log(data); /// Form위에 있는 data에서.. form은 전체 페이지값을 보내나..? 이건 어떻게 보내지는거지?  **

    const savedData = await new Airline({
        airline: data.Name,
        code: data.Code,
        icao: data.ICAO
    });

    const foundData = await loadDB.flightOperatorLoadDB(data.Name);
    const logo = 'https://s3.eu-central-1.amazonaws.com/images.flightradar24.com/assets/airlines/logotypes/' + foundData[0].detail.logo.slice(3, 100);
    savedData.logo = logo;
    savedData.save();
    await savedData;

    console.log(savedData);

    res.redirect('/main/airlineSearch');
    // res.render('airlineSearch', { savedData })
};


// [GET] main/search : open search page.
module.exports.searchGet = async function (req, res) {
    title('/main/search (Get) Route');
    console.log(`req.query:`);
    console.log(req.query)
    const { searchData } = req.query;
    let filteredData = '';

    if (searchData) {
        console.log('Searched data exists, so it searches database');
        // API data load via the service that I created
        filteredData = await loadDB.flightListLoadFromDB(searchData);
        res.render('flightSearch', { filteredData });
    } else {
        console.log('No data from Search, no searching.');
        res.render('flightSearch', { filteredData });
    }
}

// [POST] main/search : When search button clicked, it loads data via API (or FakeDB)
// from flightSearch.ejs
module.exports.searchPost = async function (req, res) {
    title('/main/search (Post) Route');

    //need to add a new feature here for the app.

    // const { searchData } = req.body;
    // res.render('flightSearch', { filteredData });
    res.render('flightSearch');
};


// [GET] main/search/flight_detail_and_order/:fltApiId : To show detailed flight information along with order input, loading api data for the flight detailed info.
module.exports.detailFlightGET = async (req, res, next) => {
    title('/main/search/flight_detail_and_order/:fltApiId (GET) Route');

    const { fltApiId } = req.params;
    const { data, departure, arrival, today } = await loadDB.detailFlightLoadFromDB(fltApiId);
    res.render('flightDetail', { data, departure, arrival, today });
}


// [POST] main/search/flight_detail_and_order/:fltApiId 
// from flightDetail.ejs
module.exports.detailFlightPost = async (req, res) => {
    title('/main/search/flight_detail_and_order/:fltApiId (POST) Route');
    console.log(req.body);
    const { fltApiId } = req.params;
    console.log(`API flt data id : ${fltApiId}`);
    const { fc, bc, pey, ey, date, details } = req.body.order;
    details.fltApiId = fltApiId;

    const flt = await Order.insertMany({ fc, bc, pey, ey, date, details });

    // : Date.parse(date)
    console.log('saved data is as follows ▼▼▼▼▼');
    console.log(flt);

    res.redirect('/main/dashboard'); // full address needed to be redirected to the right place you want
};

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
module.exports.dashboardGet = async (req, res, next) => {
    title('/main/dashboard (GET) route');

    let date = new Date(); // get today's date
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    date = yyyy + '-' + mm + '-' + dd;
    const foundData = await Order.find({ date });

    res.render('dashBoard', { foundData, date });
};

module.exports.dashboardPost = async (req, res) => {
    title('/main/dashboard (POST) route');

    const { date } = req.body;
    const foundData = await Order.find({ date });
    // console.log('foundData');
    // console.log(foundData);
    res.render('dashBoard', { foundData, date });
};

// module.exports.