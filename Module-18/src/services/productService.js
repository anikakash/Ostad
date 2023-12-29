const brandModel = require("../models/brands");
const categoryModel = require("../models/categories");
const productSliderModel = require("../models/productsliders");
const productModel = require("../models/products");
const productDetailModel = require("../models/productdetails");
const productReviewModel = require("../models/reviews");

const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const BrandListService = async()=>{
    try {
        let data = await brandModel.find();
        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}

const CategoryListService = async()=>{
    try {
        let data = await categoryModel.find();
        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}

const SliderListService = async()=>{
    try {
        let data = await productSliderModel.find();
        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}


const ListByBrandService = async(req)=>{
    try {
        let BrandID = new ObjectID(req.params.BrandID) //Here we convert BrandID string to object using mongoose

        let MatchStage = {$match:{brandID:BrandID}}
        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"categorie"}}
        let UnwindBrandStage = {$unwind:"$brand"} //Here we convert brands array to object using unwind
        let UnwindCategoryStage = {$unwind:"$categorie"}
        let ProjectionStage = {$project:{"brandID":0, "categoryID":0, "brand._id":0, "categorie._id":0}}

        let data = await productModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}

const ListByCategoryService = async(req)=>{
    try {
        let CategoryID = new ObjectID(req.params.CategoryID) //Here we convert BrandID string to object using mongoose

        let MatchStage = {$match:{categoryID:CategoryID}}
        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"categorie"}}
        let UnwindBrandStage = {$unwind:"$brand"} //Here we convert brands array to object using unwind
        let UnwindCategoryStage = {$unwind:"$categorie"}
        let ProjectionStage = {$project:{"brandID":0, "categoryID":0, "brand._id":0, "categorie._id":0}}

        let data = await productModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}

const ListBySimilarService = async(req)=>{
    try {
        let CategoryID = new ObjectID(req.params.CategoryID) //Here we convert BrandID string to object using mongoose

        let MatchStage = {$match:{categoryID:CategoryID}}

        let LimitStage = {$limit: 20}

        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"categorie"}}
        let UnwindBrandStage = {$unwind:"$brand"} //Here we convert brands array to object using unwind
        let UnwindCategoryStage = {$unwind:"$categorie"}
        let ProjectionStage = {$project:{"brandID":0, "categoryID":0, "brand._id":0, "categorie._id":0}}

        let data = await productModel.aggregate([
            MatchStage,
            LimitStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data: data}
    } catch (error) {
        return { status: "fail", error: error.message || "An error occurred" };
    }
}

const ListByKeywordService = async (req) => {
    try {
        let SearchRegex = new RegExp(req.params.Keyword, "i");
        let SearchQuery = { $or: [{ title: SearchRegex }, { shortDes: SearchRegex }] };

        let data = await productModel.aggregate([
            { $match: SearchQuery },
        ]);

        return { status: "success", data: data };
    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
};

const ListByRemarkService = async(req)=>{
    try {
        let Remark = req.params.Remark

        let MatchStage = {$match:{remark:Remark}}
        let JoinWithBrandStage = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"categorie"}}
        let UnwindBrandStage = {$unwind:"$brand"} //Here we convert brands array to object using unwind
        let UnwindCategoryStage = {$unwind:"$categorie"}
        let ProjectionStage = {$project:{"brandID":0, "categoryID":0, "brand._id":0, "categorie._id":0}}

        let data = await productModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])

        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}.toString()
    }
}

const DetailsService = async (req) => {
    try {
        let ProductID = new ObjectID(req.params.ProductID);
        let MatchStage = { $match: { productID: ProductID } };

        let data = await productDetailModel.aggregate([MatchStage]);
        return { status: "success", data: data };
    } catch (error) {
        return { status: "fail", error: error.message || "An error occurred" };
    }
};

const ReviewListService = async(req)=>{
    try {
        let ProductID=new ObjectID(req.params.ProductID);
        let MatchStage={$match:{productID:ProductID}}
        let JoinWithProfileStage = {$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}}
        let UnwindProfileStage = {$unwind:"$profile"}
        let ProjectionStage = {$project:{"des":1, "rating":1, "profile.cus_name":1}}

        let data = await productReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            UnwindProfileStage,
            ProjectionStage
        ])

        return {status: "success", data: data}
    } catch (error) {
        return { status: "fail", error: error.message || "An error occurred" };
    }
}

module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimilarService,
    ListByKeywordService,
    ListByRemarkService,
    DetailsService,
    ReviewListService
}