const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    brandName: { type: String, required: true },
    brandImg: { type: String, required: true },
}, { versionKey: false, timestamps: true });

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
