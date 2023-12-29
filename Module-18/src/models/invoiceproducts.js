const mongoose = require('mongoose');

const invoiceProductSchema = mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    invoiceID: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true },
    qty: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
}, { versionKey: false, timestamps: true });

const InvoiceProduct = mongoose.model('InvoiceProduct', invoiceProductSchema);

module.exports = InvoiceProduct;
