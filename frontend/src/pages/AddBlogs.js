import React from "react";
import Navbar from "../components/Navbar";
import NewBlog from "../components/NewBlog";
import AddNewBlogs from "../components/AddNewBlogs";

const AddBlogs = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <AddNewBlogs />
    </div>
  );
};

export default AddBlogs;
