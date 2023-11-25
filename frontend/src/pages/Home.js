import React, { useContext } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import BlogCart from "../components/BlogCart";
import NewBlog from "../components/NewBlog";
import { UserContext } from "../UserContext";
import AddNewBlogs from "../components/AddNewBlogs";

const Home = () => {
  // for showing and hiding the form when clicking on Add new blogs
  const { show } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col items-center  w-full">
        <Navbar />

            <BlogCart />
          </div>
    </>
  );
};

export default Home;
