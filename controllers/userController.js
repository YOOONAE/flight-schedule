//User model loading from mongoose
const User = require('../models/user');

//password hashing
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Show login page
module.exports.loginGET = (req, res) => {
    console.log('login GET route open');
    res.render('login');
};

//Send username and pw to server to be verified and login if verified.
module.exports.loginPOST = async (req, res) => {
    console.log('login POST route open');
    console.log(req.body);

    const { username, password } = req.body;

    if (username && password) {
        const foundUser = await User.findOne({ username });
        console.log(foundUser);

        if (foundUser) {
            const result = await bcrypt.compareSync(password, foundUser.hashedPw);
            console.log('welcome to TFS :)');
            req.session.loggedIn = true; // you can access this from anywhere as long as your server is not refreshed.
            // With this value, create your own auth code. after lunch :)
            
            req.session.currentUser = foundUser.first; // 이게 저장이 잘 안됨..확인 필요
            
            // req.session.currentUser = {
            //     first: foundUser.first,
            //     last: foundUser.last,
            //     username: foundUser.username
            // };

            console.log('res.locals.currentUser!!')
            console.log(res.locals.currentUser);
            console.log('------ currentUser!! -----')

            req.flash('success', 'You are successfully logged in :)');

            return res.redirect('/main/dashboard');
        } else {
            req.flash('fail', 'No user existing.');
        }
    } else {
        req.flash('fail', 'Missing username or password');
    }
    res.redirect('/user/login');

}

//Show signup page
module.exports.signupGET = (req, res) => {
    console.log('signup GET route open');
    res.render('signup');
};

//Get username and pw. hash pw and put it into db after verifying it's unique username in the db.
module.exports.signPOST = async (req, res) => {
    console.log('signup POST route open');
    console.log(req.body);
    const { username, password, first, last } = req.body;

    if (username && password) {
        await bcrypt.hash(password, saltRounds).then(async function (hashedPw) {
            console.log(`hash? : ${hashedPw}`);
            await new User({ first, last, username, hashedPw }).save();
        });
        res.redirect('/user/login');
    } else {
        console.log('no query data from /test route');
        res.redirect('/user/signup');
    }
};

module.exports.isLoggedIn = (req, res, next) => {
    console.log('%%%%%%%%%% you are getting through isLoggedIn middleware');

    if (req.session.loggedIn) {
        console.log('You are logged in now.')
        next();
    } else {
        console.log('You need to log in first.');
        req.flash('fail', 'Wrong username or password :(')
        res.redirect('/user/login')
    }
};

module.exports.logoutGet = (req, res) => {
    console.log('You just logged out.');
    delete req.session.loggedIn;
    res.redirect('/user/login');
}