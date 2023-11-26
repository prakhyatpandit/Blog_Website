import React, { useContext } from "react";
import NewBlog from "./NewBlog";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const Navigate = useNavigate();
  const { user } = useContext(UserContext);
  const handleLogin = () => {
    Navigate("/login");
  };
  const handleLogo = () => {
    Navigate("/");
  };
  return (
    <>
      <div className=" w-screen flex items-center  p-[1rem]  gap-[0.5rem] justify-center sm:gap-[6rem]   border ">
        {/* LOGO */}
        {/* <div className='font-bold'> DAILY BLOGS </div> */}
        {/* About Section */}
        <div className="font-bold hover:cursor-pointer" onClick={handleLogo}>
          {" "}
          Blogs
        </div>

        <NewBlog />
        <div className="bg-gray-400 p-2 rounded-full px-3 text-white">
          <button className="flex gap-3 items-center" onClick={handleLogin}>
        
Login


            <FaUserAlt size={13} />


            
          </button>
        </div>

        {/* Login Section */}
        {/* <div> Login</div> */}
      </div>
     <div>

     </div>
    </>
  );
};

export default Navbar;
