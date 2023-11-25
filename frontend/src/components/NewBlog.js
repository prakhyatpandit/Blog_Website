import React from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const navigate = useNavigate();
  // Show or Hide the New Blog form
  const addNewBlog = () => {
    navigate("/new");
  };
  // console.log(show)

  return (
    <div
      className="w-[10rem] border rounded-full h-10 text-center bg-green-600 text-white hover:bg-green-900 hover:cursor-pointer hover:text-gray-300 "
      onClick={addNewBlog}
    >
      <button className="  mt-[0.35rem] ">Add New +</button>
    </div>
  );
};

export default NewBlog;
