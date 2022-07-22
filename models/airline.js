const mongoose = require('mongoose');

const airlineSchema = new mongoose.Schema({
    airline: { type: String, required: true },
    code: String,
    icao: { type: String, required: true },
    logo: String
    // logo: {Type: String, required: [true, 'OMG no logo link']}
});

const Airline = mongoose.model('Airline', airlineSchema);
module.exports = Airline;
