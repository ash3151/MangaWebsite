import mongoose from "mongoose";

const mangaSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Manga=mongoose.model("Manga",mangaSchema);

export default Manga