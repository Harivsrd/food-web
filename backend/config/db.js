import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://harivsrd:05060708@cluster0.t0lm8b1.mongodb.net/food-del')
    .then(()=>{
        console.log("DB connected")
    })
    .catch(()=>{
        console.log("Db not connected")
    })
}