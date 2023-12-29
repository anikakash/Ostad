const mongoose = require('mongoose');

const wishSchema = mongoose.Schema({
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { versionKey: false, timestamps: true });

const Wish = mongoose.model('Wish', wishSchema);

module.exports = Wish;
