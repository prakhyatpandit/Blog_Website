import mongoose  from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true
    }

})

const user = mongoose.model('User',UserSchema)
export default user