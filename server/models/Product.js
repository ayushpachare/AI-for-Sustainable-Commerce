import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: String,
    description: String,
    category:String,
    subCategory: String,
    seoTags: [String],
    sustainabilityFilters: [String],

    createdAt:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model("Product",productSchema);