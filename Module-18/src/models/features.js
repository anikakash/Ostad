const mongoose = require('mongoose');

const featureSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
}, { versionKey: false, timestamps: true });

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;
