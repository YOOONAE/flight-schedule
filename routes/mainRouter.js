// EXPRESS ROUTE INFORMATION:: /main/
const express = require('express');
const router = express.Router();

//mongo DB models
const mongoose = require('mongoose');
const Order = require('../models/order');

//controller link
const flights = require('../controllers/flights')

//Utilities link
const catchAsync = require('../utils/catchAsync');

// router.routes

//Go to main entrance page
router.get('/', (req, res) => {
    console.log('');
    console.log('----------------------------------------');
    console.log('▼▼▼▼▼ /main (GET) route ▼▼▼▼▼');
    console.log('----------------------------------------');
    res.render('main');
});

//Will show flightSearch.ejs page
router.route('/search')
    .get(flights.searchGet) //GET: Open search page
    .post(catchAsync(flights.searchPost)); //POST: Get data from searchPage and search flight data 'when clicked'.

//Will show detail flt order page
router.route('/search/flight_detail_and_order/:fltApiId')
    .get(catchAsync(flights.detailFlightGET)) //GET: In the search page, detail order input page will be open when orderinput button clicked.
    .post(catchAsync(flights.detailFlightPost)); //POST: From detail order input page, it will save data loaded from DB into my mongoDB

//Will show dashboard page
router.route('/dashboard')
    .get(flights.dashboardGet)
    .post(flights.dashboardPost);

//Will show orderEdit page from dashboard when "Update" button clicked.
router.route('/dashboard/orderEdit/:orderDbId')
    .get(flights.orderEditGet) //GET: open orderEdit page
    .post(flights.orderEditPost); //POST: update data in my mongoDB and redirect to dashboard page


router.route('/airlineSearch')
    .get(flights.airlineListGet)
    .post(flights.airlineListPost); //async, need to use catch async

module.exports = router;