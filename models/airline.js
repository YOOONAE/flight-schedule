const mongoose = require('mongoose');

const airlineSchema = new mongoose.Schema({
    airline: { Type: String, required: true },
    logo: {Type: String, required: [true, 'OMG no logo link']}
});

const Airline = mongoose.model('Airline', airlineSchema);
module.exports = Airline;
