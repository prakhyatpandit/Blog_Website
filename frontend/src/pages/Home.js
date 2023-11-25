import React from "react";
import Navbar from "../components/Navbar";

import BlogCart from "../components/BlogCart";

const Home = () => {
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
