if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

//Load pkgs/libraries
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const engine = require('ejs-mate');

// Session settings
const session = require('express-session');
const sessionConfig = {
    secret: 'myfirstflightapp',
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionConfig));

// Require Flash
const flash = require('connect-flash');
app.use(flash()); // Flash must be after Session. Session comes first and Flash comes next.

//Bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;


//mongo DB models
const mongoose = require('mongoose');
// const Order = require('./models/order');
// const flightDataLoad = require('./controllers/flightDataLoad')

//ejs, express basic settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))

// Routing setting
const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');
// const { search } = require('./routes/mainRouter');

//Connect Mongoose to Express
main().catch(err => console.log(err)); //Hoisting? if error happens in connecting mongo DB, it will show you an error msg
async function main() {
    await mongoose.connect('mongodb://localhost:27017/flightSearchApp');
    console.log('mongoose connected');
}

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.fail = req.flash('fail');
    res.locals.info = req.flash('info');
    res.locals.isloggedIn = req.session.loggedIn;
    res.locals.currentUser = req.session.currentUser;
    next();
})


//login, signup route
app.use('/user', userRouter);


// Go to main route that has search, search/orderinputdetail, dashboard, and etc.
app.use('/main', mainRouter);



// Custom Error Handler (it runs first and it passes err value to the Express dafault handler, or you can stop it here by showing your own err screen)
app.use((err, req, res, next) => {
    console.log('Hey, you have an error! but I catched it for you :) ');
    console.log(`Customer Error Handler said: (${err})`); //With this, it is regarded as custom error handler since it stops here not passing anything to the Express Default error hanlder
    // res.send('Hey, you have an error! but I catched it for you :) '); // // "res.send" not handled by custom error handler, passed to Express Default Error Handler
    // res.status(500).send(err); // not handled by custom error handler, passed to Express Default Error Handler
    // next(err); // not handled by custom error handler, passed to Express Default Error Handler
    console.log('-----------------')
    console.log(err);
    console.log('-----------------')

    res.render('error', { err });
});

app.listen(3000, () => {
    console.log('Connected to port 3000')
})

