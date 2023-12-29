const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName: { type: String, required: true },
    categoryImg: { type: String, required: true },
}, { versionKey: false, timestamps: true });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
