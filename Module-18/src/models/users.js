const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
}, { versionKey: false, timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
