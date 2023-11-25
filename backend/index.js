import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());
import Blog from "./model/newblogSchema.js";
import User from "./model/userSchema.js";
app.use(bodyParser.json());



// Connect the DataBase
try {
  mongoose.connect("mongodb://localhost:27017")
  console.log("Database connected successfully");
} catch (error) {
  console.error("Error in DB connection", error);
}


// Adding  The new Blog

app.post("/add",async(req,res)=>{
  try{

    const {header,detail,image}=req.body;
    const newBlog = await Blog.create({header,detail})
res.json(newBlog)
  }
  catch(error){
    res.json(error)
  }
})

// Register
app.post("/register", async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const userDoc = await User.create({ name, password, email });
    res.json(userDoc);
  } catch (error) {
    res.json(error);
  }
});




// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user.password == password) {
      res.json(user);
    } else {
      res.json("check email or password ");
    }
  } catch (error) {
    res.json(error);
  }
});



// for image Add 
          
// cloudinary.config({ 
//   cloud_name: 'drq23c06j', 
//   api_key: '188456478845913', 
//   api_secret: 'BgU-WVAPcu1H8QsdhtRBpHp-zCY' 
// });

// app.post("/add", async (req, res) => {
//   const { header, detail,image } = req.body;
//   try {
//     const file=req.files.image
    
//    await cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
// res.json(result)    })
//     // const userDoc = await Blog.create({ header, detail,image:imageResult.secure_url });
//     // res.json(userDoc);
//   } catch (error) {
//     res.json(error);
//   }
// });

// for Getting all  the BLog

app.get("/all", async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.json(allBlogs);
  } catch (error) {}
});

//  For Deleting the blog Post

app.delete("/blogs/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Blog.findByIdAndDelete(id);
    res.json(" deleted ");
  } catch (error) {
    res.json(error);
  }
});

app.put("/edit/:id", async (req, res) => {
  try {
    const { header, detail } = req.body;
    const id = req.params.id;

    await Blog.findByIdAndUpdate(id, { header, detail });
    res.json("Updated SUccessfully");
  } catch (error) {
    res.json(error);
  }
});

// For Register of the USer

app.get("/", (req, res) => {
  res.json("hello");
});

// For starting of the Server
app.listen(PORT, () => {
  console.log("Listining on PORT ", PORT);
});
