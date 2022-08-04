// EXPRESS ROUTE INFORMATION:: /main/
const express = require('express');
const router = express.Router();

//controller link
const flights = require('../controllers/flights')

//Utilities link
const catchAsync = require('../utils/catchAsync');

//password hashing
const bcrypt = require('bcrypt');
const saltRounds = 10;

//User model loading from mongoose
const User = require('../models/user');

//load userContoller
const userContoller = require('../controllers/userController');

router.route('/login')
    .get(userContoller.loginGET)
    .post(catchAsync(userContoller.loginPOST));

router.route('/signup')
    .get(userContoller.signupGET)
    .post(catchAsync(userContoller.signPOST));

router.route('/logout')
    .get(userContoller.logoutGet);

module.exports = router;