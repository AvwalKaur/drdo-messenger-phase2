const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    phone: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);