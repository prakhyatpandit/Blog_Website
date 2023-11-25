import React from "react";

import Navbar from "../components/Navbar";
import Edit from "../components/Edit";

const EditBlog = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Navbar />
        <Edit />
      </div>
    </>
  );
};

export default EditBlog;
