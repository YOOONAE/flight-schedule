const mongoose = require('mongoose');
const Airline = require('../models/airline');

const orderSchema = new mongoose.Schema({
    fc: { type: Number, required: true },
    bc: { type: Number, required: true },
    pey: { type: Number, required: true },
    ey: { type: Number, required: true },
    date: { type: String, required: true },
    details: {
        fltApiId: String,
        flight: String,
        acType: String,
        acTypeDetail: String,
        departureTime: String,
        departureDate: String,
        arrivalDate: String,
        arrivalTime: String,
        logoImg: String
    },
    airline: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Airline'
        // required: true
    }
});


const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
