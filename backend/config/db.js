import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://abhishekj3094:abhi._.3094@cluster0.opjsx.mongodb.net/userInfo').then(()=>console.log("DB Connected"));
   
}
