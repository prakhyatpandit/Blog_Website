import React, { useContext } from "react";
import NewBlog from "./NewBlog";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const Navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { isuser,setIsuser } = useContext(UserContext);

  const handleLogin = () => {
    if (isuser === false) {
      Navigate("/login");
    }
  };

  const handleLogo = () => {
    Navigate("/");
  };
  const logOut = () => {
    setIsuser(false)
  };
  return (
    <>
      <div className=" w-screen flex items-center  p-[1rem]  gap-[0.5rem] justify-center sm:gap-[6rem]   border ">
        {/* LOGO */}
        {/* <div className='font-bold'> DAILY BLOGS </div> */}
        {/* About Section */}
        <div
          className="font-bold hover:cursor-pointer hover:text-green-500 underline uppercase"
          onClick={handleLogo}
        >
          {" "}
          Blogs
        </div>

        <NewBlog />

        <div className="flex  items-center gap-2 ">
          <div className="bg-gray-400 p-2 rounded-full px-3 text-white">
            <button className="flex gap-3 items-center" onClick={handleLogin}>
              {isuser ? <h1>{user}</h1> : <h1>Login</h1>}

              <FaUserAlt size={13} />
            </button>
          </div>
          {isuser ? (
            <div className="underline cursor-pointer text-sm" onClick={logOut}>
              Logout?
            </div>
          ) : null}
        </div>
        {/* Login Section */}
        {/* <div> Login</div> */}
      </div>
      <div></div>
    </>
  );
};

export default Navbar;
