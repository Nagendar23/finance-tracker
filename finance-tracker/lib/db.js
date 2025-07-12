// #to create a connection with database
import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB(){
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("Conncected to database");
    }catch(err){
        console.log("Error conncecting to database",err);
    }
}

connectDB();