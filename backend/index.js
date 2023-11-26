import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from "multer";
import Blog from "./model/newblogSchema.js";
import User from "./model/userSchema.js";
import { db } from "./db.js";
const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Adding the image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/images/"); // Set your desired upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Other middleware and routes...

app.post("/add", upload.single("image"), async (req, res) => {
  // Access the uploaded file through req.file
  const imagePath = req.file.path;
  const imageeName = req.file.filename;

  try {
    // Perform your database operation
    await Blog.create({
      image: imageeName,
      header: req.body.header,
      detail: req.body.detail,
    });

    // Respond to the client after the database operation is successful
    res.json({ imagePath, message: "Upload successful" });
  } catch (error) {
    // Handle any errors that occur during the database operation
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Edit 
app.put("/edit/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    let updateData = {
      header: req.body.header,
      detail: req.body.detail,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    await Blog.findByIdAndUpdate(id, updateData);

    res.json({ message: "Update successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// Connect the DataBase
try{
if(db()){
res.json("DB connected Successfully")
}  
}
catch(error){
  res.json("error")
}

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

// app.put("/edit/:id", async (req, res) => {
//   try {
//     const { header, detail,image } = req.body;
//     const id = req.params.id;

//     await Blog.findByIdAndUpdate(id, { header, detail,image });
//     res.json("Updated SUccessfully");
//   } catch (error) {
//     res.json(error);
//   }
// });



// For Register of the USer

app.get("/", (req, res) => {
  res.json("hello");
});

// For starting of the Server
app.listen(PORT, () => {
  console.log("Listining on PORT ", PORT);
});
