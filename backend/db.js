import mongoose  from "mongoose";

export function  db(){

    try {
        mongoose.connect("mongodb+srv://blog:blog@cluster0.1bxrunm.mongodb.net/");
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error in DB connection", error);
    }
}
