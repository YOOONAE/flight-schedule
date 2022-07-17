const axios = require('axios');
const fakeDBList = require('./fakeDB/fakeDbList');
const Order = require('../models/order');

// [GET] main/search : open search page.
module.exports.searchGet = function (req, res) {
    console.log('/main/search (Get) Route');
    res.render('flightSearch');
}

// [POST] main/search : When search button clicked, it loads data via API (or FakeDB)
// from flightSearch.ejs
module.exports.searchPost = async function (req, res) {
    console.log('/main/search (Post) Route');
    const { searchData } = req.body;

    // API data load
    const options = {
        method: 'GET',
        // url: 'https://flight-radar1.p.rapidapi.com/flights/search',
        params: { query: searchData, limit: '25' },
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
        }
    };

    axios.request(options)
        .then(function (response) {

            //fakeDBload
            // const response = fakeFlightList;

            const { results, stats } = response.data;
            console.log(`searchData : ${searchData}`);

            const filters = {
                type: 'live'
            }

            // if one of the values matches "filters", then it returns True and the very element(object) at that moment.
            // It's like OR condition.
            const filteredData = results.filter(data => {
                for (let key in filters) {
                    if (data[key] === filters[key]) {
                        return true;
                    }
                }
                return false;
            })

            console.log('*********  The values that I pulled out from DB *******');
            console.log(filteredData);

            res.render('flightSearch', { filteredData });


        }).catch(function (error) {
            console.log('**FakeDB loaded.')
            const filteredData = fakeDBList.listData.results.filter(data => {
                if (data.type === 'live') {
                    return true;
                }
                return false;
            });

            console.log(filteredData);
            res.render('flightSearch', { filteredData });

            // original code to handle 
            // console.error(error);
            // res.send('something wrong');
        });
};

const loadDB = require('../services/dataLoadfromDB');  //////////////////////**************** */

// [GET] main/search/flight_detail_and_order/:fltApiId : To show detailed flight information along with order input, loading api data for the flight detailed info.
module.exports.detailFlightGET = async (req, res, next) => {
    const { fltApiId } = req.params;
    const {data, departure, arrival, today} = await loadDB.detailFlightLoadFromDB(fltApiId);
    res.render('flightDetail', { data, departure, arrival, today });
}


// [POST] main/search/flight_detail_and_order/:fltApiId 
// from flightDetail.ejs
module.exports.detailFlightPost = async (req, res) => {
    console.log(req.body);
    const { fltApiId } = req.params;
    console.log(`API flt data id : ${fltApiId}`);
    const { fc, bc, pey, ey, date, details } = req.body.order;
    details.fltApiId = fltApiId;

    console.log(`detail(loaded):`)
    console.log(details);

    const flt = await Order.insertMany({ fc, bc, pey, ey, date, details });

    // : Date.parse(date)
    console.log('saved data is as follows:');
    console.log('===========================');
    console.log(flt);

    // res.send('order input (post) works');
    // res.render('orderInput', { flt })
    res.redirect('/main/dashboard'); // full address needed (it seems like it)
    // res.redirect('orderInput', {flt})
};

module.exports.orderEditGet = async (req, res) => {
    console.log('edit route work from dashboard');
    const { orderDbId } = req.params;
    console.log(`orderDbId: ${orderDbId}`);

    const foundData = await Order.findById(orderDbId);
    console.log(foundData);

    // res.send('edit route works from dashboard');
    res.render('orderEdit', { foundData });
    // res.render('orderEdit');
};

module.exports.orderEditPost = async (req, res) => {
    const { orderDbId } = req.params;
    const { order } = req.body;
    const updatedData = await Order.findByIdAndUpdate(orderDbId, order, { new: true });

    console.log('Updated Data Below')
    console.log(updatedData);

    console.log('/dashboard/orderEdit/:orderDbId ---- POST Route works');
    // res.send('/dashboard/orderEdit/:orderDbId ---- POST Route works');
    res.redirect('/main/dashboard');
};

// [GET] main/dashboard  
module.exports.dashboardGet = async (req, res, next) => {
    console.log('dashboard works')
    let date = new Date(); // get today's date
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    date = yyyy + '-' + mm + '-' + dd;
    const foundData = await Order.find({ date });

    res.render('dashBoard', { foundData, date });
};

module.exports.dashboardPost = async (req, res) => {
    console.log('dashboard post route works');
    const { date } = req.body;
    const foundData = await Order.find({ date });
    // console.log('foundData');
    // console.log(foundData);
    res.render('dashBoard', { foundData, date });
};

// Convert Function to convert the data received from API to the proper type that works in my app.
// function dateConverter(jsonData) {
//     console.log(jsonData);
//     let date = new Date(jsonData * 1000);
//     console.log(date);
//     let dd = String(date.getDate()).padStart(2, '0');
//     let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
//     let yyyy = date.getFullYear();
//     let h = function() { return date.getHours()<10 ? '0'+date.getHours() : date.getHours(); }();
//     let m = date.getMinutes();
//     date = yyyy + '-' + mm + '-' + dd;
//     let time = h + ":" + m;
//     return { date, time }
// }


