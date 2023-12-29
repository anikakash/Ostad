const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    shortDes: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    discountPrice: { type: Number, default: 0 },
    image: { type: String, required: true },
    star: { type: Number, default: 0 },
    stock: { type: Number, required: true },
    remark: { type: String },
    categoryID: { type: mongoose.Schema.Types.ObjectId, required: true },
    brandID: { type: mongoose.Schema.Types.ObjectId, required: true },
}, { versionKey: false, timestamps: true });

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;
