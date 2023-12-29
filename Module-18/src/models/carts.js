const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true, min: 1 },
    size: { type: String, required: true },
}, { versionKey: false, timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
