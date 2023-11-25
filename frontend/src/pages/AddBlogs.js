import React from "react";
import Navbar from "../components/Navbar";
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
