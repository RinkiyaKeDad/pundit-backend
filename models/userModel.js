const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  displayName: { type: String },
  puns: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Pun' }],
});

module.exports = mongoose.model('User', userSchema);
