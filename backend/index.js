import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from "multer";
import Blog from "./model/newblogSchema.js";
import User from "./model/userSchema.js";
import { db } from "./db.js";
import dotenv from 'dotenv'
import {
  deleteBlog,
  addBlog,
  editBlog,
  loginUser,
  registerUser,
  getBlogs,
} from "./controller/controller.js";
const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
dotenv.config();

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

// Connect the DataBase
db()

app.post("/register", registerUser);
app.post("/login", loginUser);
app.get("/all", getBlogs);
app.post("/add", upload.single("image"), addBlog);
app.put("/edit/:id", upload.single("image"), editBlog);
app.delete("/blogs/:id", deleteBlog);

app.get("/", (req, res) => {
  res.json("hello");
});

// For starting of the Server
app.listen(PORT, () => {
  console.log("Listining on PORT ", PORT);
});
