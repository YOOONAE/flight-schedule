const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    first : String,
    last : String,
    username: {
        type: String,
        required: true,
        unique: [true, 'Unfortunately, the username already taken :(']
    },
    hashedPw: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;