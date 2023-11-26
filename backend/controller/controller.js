import Blog from "../model/newblogSchema.js";
import User from "../model/userSchema.js";
import multer from "multer";

// For registration of the User
export const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const userDoc = await User.create({ name, password, email });
    res.json(userDoc);
  } catch (error) {
    res.json(error);
  }
};

// For login of the particular User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if email is provided
  if (!email) {
    res.json("Error: Email is required");
    return;
  }

  // Check if password is provided
  if (!password) {
    res.json("Error: Password is required");
    return;
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.json("Error: User not found");
      return;
    } else {
      if (password === user.password) {
        res.json(user);
      } else {
        res.json("Error: Incorrect password");
      }
    }
  } catch (error) {
    // You should handle errors here
    console.error(error);
    res.json("Error: Something went wrong");
  }
};


// For Adding the New BLog
export const addBlog = async (req, res) => {
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
};

// For editing of the BLog
export const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = {
      header: req.body.header,
      detail: req.body.detail,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const response = await Blog.findByIdAndUpdate(id, updateData);

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// For deletion of the BLog
export const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    await Blog.findByIdAndDelete(id);
    res.json(" deleted ");
  } catch (error) {
    res.json(error);
  }
};
// For getting all the blogs from the databases

export const getBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.json(allBlogs);
  } catch (error) {}
};
