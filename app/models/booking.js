const mongoose = require('mongoose');
const config = require('../config/database');

// Booking Schema
const BookingSchema = mongoose.Schema({
  date: {
    type:Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  city: {
    type: String,
    required: true
  },
  hotel: {
    type: String,
    required: true
  }
}, {
  collection: 'booking'
});

const Booking = module.exports = mongoose.model('Booking', BookingSchema);