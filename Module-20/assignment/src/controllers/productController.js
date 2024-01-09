const BrandModel=require('../models/brandModel')
const ProductModel = require('../models/productModel')

exports.AllBrand = async (req, res) => {
    try {
        const result = await BrandModel.find()
        res.status(200).json({status: 'success', data: result})

    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})
    }
}

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

exports.BrandById = async (req, res) => {
    let id= req.params.id;
    let Querry = { brandID: new ObjectId(id) };
    try {
        const result = await ProductModel.find(Querry)
        console.log(result)
        res.status(200).json({status: 'success', data: result})

    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})
    }
}

exports.AllProducts = async (req, res) => {
    try {
        const result = await ProductModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})
    }
}