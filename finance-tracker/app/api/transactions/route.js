// used for post and get results
import { connectDB } from "@/lib/db";
import Transaction from '../../../models/transaction'

///get all transactions
export async function GET(req) {
    await connectDB();
    try{
        const transactions = await Transaction.find({}).sort({date: -1, createdAt: -1});
        return Response.json(transactions);
        console.log(transactions);
    }catch(error){
        return Response.json("Error fetching transactions",err)
        console.log("error in fetching transactions",error)
    }
}

///post a new transaction
export async function POST(req){
    await connectDB();
    try{
        const body = await req.json();
        if(!body.amount || !body.date || !body.description){
            return Response.json({message: "Please fill all the fields"});
            console.log("Please fill all the fields");
        }
        const transaction = await Transaction.create(body);
        return Response.json(transaction);
        console.log(transaction);
    }catch(error){
        return Response.json("Error creating transaction",error)
        console.log("error in creating transaction",error)
    }
}

