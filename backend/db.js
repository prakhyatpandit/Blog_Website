import mongoose from "mongoose";

export default function db() {
    try{

        mongoose.connect("mongodb://localhost:27017")
    }
    catch(error){
        console.log(error)
    }
}

