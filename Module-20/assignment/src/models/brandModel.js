const mongoose = require('mongoose')

const DataSchema = mongoose.Schema(
    {
        BrandName: {
            type: String,
            require: true,
            unique: true
        },
        BrandImg: {
            type: String,
            require: true,
        },
    },
    {
        versionkey: false
    }
)

const BrandModel = mongoose.model('brands', DataSchema)

module.exports=BrandModel;