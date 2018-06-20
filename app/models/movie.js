const mongoose = require('mongoose');
const config = require('../config/database');

// Movie Schema
const MovieSchema = mongoose.Schema({
  title: {
    type: String
  }
});

const Movie = module.exports = mongoose.model('Movie', MovieSchema);

