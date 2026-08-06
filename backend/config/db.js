import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://harivsrd:harivsrd@cluster0.t0lm8b1.mongodb.net/?appName=Cluster0')
    .then(()=>{
        console.log("DB connected")
    })
    .catch(()=>{
        console.log("Db not connected")
    })
}
