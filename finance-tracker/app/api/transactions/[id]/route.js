import { connectDB } from "@/lib/db";
import Transaction from '../../../../models/transaction';

///to update transaction
export async function PUT(req,{params}) {
    await connectDB();
    try{
        const data = await req.json();
        const updated = await Transaction.findByIdAndUpdate(params.id, data, {new:true})
        return Response.json(updated);
        console.log(updated);
        if(!updated){
            return Response.json("Transaction not Found");
            console.log("Transaction not Found");
        }
    }catch(err){
        return Response.json("Failed to update the transaction");
        console.log("Failed to update the transaction. Try agian later",err)
    }
}

///to delete a transaction
export async function DELETE(req, {params}){
    await connectDB();
    try{
        const deleted = await Transaction.findByIdAndDelete(params.id,);
        return Response.json(deleted);
        console.log(deleted);
        if(!deleted){
            return Response.json("Transaction not Found");
            console.log("Transaction not Found");
        }
    }catch(err){
        return Response.json("Failed to delete the transaction");
        console.log("Failed to delete the transaction. Try agian later",err)
    }
}