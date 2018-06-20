const mongoose = require('mongoose');
const config = require('../config/database');

// Comments Schema
const CommentsSchema = mongoose.Schema({
  author: {
    type: String
  },
  description: {
    type: String,
    required: true
  }
},{
    collection: 'comments'
});

const Comments = module.exports = mongoose.model('Comments', CommentsSchema);

