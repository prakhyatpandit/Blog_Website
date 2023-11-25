import mongoose from "mongoose";

 const  blogSchema = new mongoose.Schema({
   header: {
     type: String,
    },
    detail: {
      type: String,
    },
    image: {
      type: String,
    },
    like:{
        type:String,
    },
    love:{
        type:String,
    },
    dislike:{
        type:String
    }

});

const UserModel = mongoose.model('Blog',blogSchema)
export default UserModel