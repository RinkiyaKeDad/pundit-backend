const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const punSchema = new Schema({
  content: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model('Pun', punSchema);
