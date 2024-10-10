import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://aj309430:abhi._.3094@cluster0.toplc.mongodb.net/userInfo').then(()=>console.log("DB Connected"));
   
}
