// const axios = require('axios');
// const fakeDBList = require('./fakeDB/fakeDbList');
const Order = require('../models/order');
const { search } = require('../routes/mainRouter');
const loadDB = require('../services/dataLoadfromDB');  //Services to load DB

// [GET] /main/airlineSearch
module.exports.airlineListGet = function (req, res) {
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main/airlineSearch (GET) route ▼▼▼▼▼');
    console.log('----------------------------------------');

    res.render('airlineSearch', {});
    // res.send('airline search page works');
};


// [POST] /main/airlineSearch
module.exports.airlineListPost = async function (req, res) {
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main/airlineSearch (POST) route ▼▼▼▼▼');
    console.log('----------------------------------------');

    const { searchData } = req.body;
    console.log(searchData);

    const data = await loadDB.airlineListLoadFromDB();

    console.log(data);
    const airlines = data.rows;

    // searching logic (startwith, endwith, include, ...)
    const filteredData = airlines.filter((el) => {
        if ( 
            el.Name.toLowerCase().startsWith(searchData.toLowerCase())||
            el.Name.toLowerCase().endsWith(searchData.toLowerCase())||
            el.Name.toLowerCase().includes(searchData.toLowerCase())||
            el.Code.toLowerCase().includes(searchData.toLowerCase())
            ) {
            return true;
        }
        return false;
    })

    console.log('filtered');
    console.log(filteredData)


    // searchAirline.ejs 에서 버튼 만들어주고, 버튼 누르면 항공사 이름,코드,ICAO정보 + 로고 이미지 주소 airline DB 에 저장하기!

    res.render('airlineSearch', {filteredData})

};


// [GET] main/search : open search page.
module.exports.searchGet = function (req, res) {
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main/search (Get) Route ▼▼▼▼▼');
    console.log('----------------------------------------');
    res.render('flightSearch');
}

// [POST] main/search : When search button clicked, it loads data via API (or FakeDB)
// from flightSearch.ejs
module.exports.searchPost = async function (req, res) {
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main/search (Post) Route ▼▼▼▼▼');
    console.log('----------------------------------------');
    const { searchData } = req.body;

    // API data load via the service that I created
    const filteredData = await loadDB.flightListLoadFromDB(searchData);

    res.render('flightSearch', { filteredData });
};


// [GET] main/search/flight_detail_and_order/:fltApiId : To show detailed flight information along with order input, loading api data for the flight detailed info.
module.exports.detailFlightGET = async (req, res, next) => {
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main/search/flight_detail_and_order/:fltApiId (GET) Route ▼▼▼▼▼');
    console.log('----------------------------------------');

    const { fltApiId } = req.params;
    const { data, departure, arrival, today } = await loadDB.detailFlightLoadFromDB(fltApiId);
    res.render('flightDetail', { data, departure, arrival, today });
}


// [POST] main/search/flight_detail_and_order/:fltApiId 
// from flightDetail.ejs
module.exports.detailFlightPost = async (req, res) => {
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main/search/flight_detail_and_order/:fltApiId (POST) Route ▼▼▼▼▼');
    console.log('----------------------------------------');
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
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main/dashboard/orderEdit (GET) route ▼▼▼▼▼');
    console.log('----------------------------------------');
    const { orderDbId } = req.params;
    console.log(`orderDbId: ${orderDbId}`);

    const foundData = await Order.findById(orderDbId);
    console.log(foundData);

    // res.send('edit route works from dashboard');
    res.render('orderEdit', { foundData });
    // res.render('orderEdit');
};

module.exports.orderEditPost = async (req, res) => {
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main/dashboard/orderEdit (POST) route ▼▼▼▼▼');
    console.log('----------------------------------------');
    const { orderDbId } = req.params;
    const { order } = req.body;
    const updatedData = await Order.findByIdAndUpdate(orderDbId, order, { new: true });

    console.log('Updated Data Below')
    console.log(updatedData);

    res.redirect('/main/dashboard');
};

// [GET] main/dashboard  
module.exports.dashboardGet = async (req, res, next) => {
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main/dashboard (GET) route ▼▼▼▼▼');
    console.log('----------------------------------------');

    let date = new Date(); // get today's date
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    date = yyyy + '-' + mm + '-' + dd;
    const foundData = await Order.find({ date });

    res.render('dashBoard', { foundData, date });
};

module.exports.dashboardPost = async (req, res) => {
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main/dashboard (POST) route ▼▼▼▼▼');
    console.log('----------------------------------------');

    const { date } = req.body;
    const foundData = await Order.find({ date });
    // console.log('foundData');
    // console.log(foundData);
    res.render('dashBoard', { foundData, date });
};

// module.exports.