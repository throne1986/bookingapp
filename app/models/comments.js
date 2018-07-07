const mongoose = require('mongoose');
const config = require('../config/database');

// Comments Schema
const CommentsSchema = mongoose.Schema({
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
  collection: 'comments'
});

const Comments = module.exports = mongoose.model('Comments', CommentsSchema);