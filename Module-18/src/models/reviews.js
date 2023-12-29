const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    des: { type: String, required: true },
    rating: { type: Number, required: true},
}, { versionKey: false, timestamps: true });

const ReviewModel = mongoose.model('reviews', reviewSchema);

module.exports = ReviewModel;
