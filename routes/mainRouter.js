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
    console.log('/main (Get) Route');
    res.render('main');
});

//GET: Open search page
//POST: Get data from searchPage and search flight data 'when clicked'.
router.route('/search')
    .get(flights.searchGet)
    .post(flights.searchPost);

//show detail flt info page
router.route('/search/flight_detail_and_order/:fltApiId')
    .get(catchAsync(flights.detailFlightGET)) 
    .post(catchAsync(flights.detailFlightPost));

router.route('/dashboard')
    .get(flights.dashboardGet)
    .post(flights.dashboardPost);

router.route('/dashboard/orderEdit/:orderDbId')
    .get(flights.orderEditGet) 
    .post(flights.orderEditPost);


// router.use((err, req, res, next) => {
//     console.log('Hey, you have an error! but I catched it for you :) ');
//     res.send('Hey, you have an error! but I catched it for you :) ');
// });

module.exports = router;