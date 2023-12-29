const mongoose = require('mongoose');

const productDetailsSchema = mongoose.Schema({
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true },
    des: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
}, { versionKey: false, timestamps: true });

const ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);

module.exports = ProductDetails;
