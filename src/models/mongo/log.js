const mongoose = require('mongoose');

// Modelo del log
const logSchema = new mongoose.Schema({
  action: String,
  user: String,
  data: Object,
  createAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('log', logSchema);