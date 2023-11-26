import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

import { FaRegUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const BlogCart = () => {
  const navigate = useNavigate();
  // console.log(blogDocs)

  // For accessing the blogs
  const [cartData, setcartData] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/all");
        setcartData(response.data);

        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // handleDelete
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/blogs/${id}`);
      if (response.status === 200) {
        // const updateData = ([...cartData])
        // setcartData(updateData.filter((items)=>items._id!==id))
        //  updateData = cartData.filter((_,i)=>i!==index)
        // setcartData(updateData)
        const updateData = cartData.filter((item) => item._id !== id);
        setcartData(updateData);
        console.log(id);

        alert("Deleted Successfully");
      } else {
        throw new Error("An error occurred while deleting the item");
      }
    } catch (error) {}
  };

  //Get Blog one specific

  const handleEdit = async (items) => {
    try {
      // const data= await axios.get(`http://localhost:8000/edit/${id}`)

      navigate("/edit", { state: items });
    } catch (error) {
      console.log(error);
    }
  };

  const handleReadMore = (items) => {
    navigate("/blogs", { state: items });
  };

  return (
    <>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2   gap-[3rem] mt-[1rem]   ">
        {cartData.reverse().map((items, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-400  shadow-gray-400 shadow-md rounded-md  w-[19rem] sm:w-[23rem] justify-between "
          >
            {/* image section */}
            <div className="h-full  w-full ">
              <img
                src={require(`../images/${items.image}`)}
                className=" h-full  w-full  "
              />
            </div>

            {/*  Section */}
            <div className="px-[0.2rem]">
              {/* author */}
              <div className="flex px-[0.2rem]  mt-1">
                <div className="flex gap-2   items-center ">
                  <FaRegUser size={13} className="" />
                  Anonymous
                  <span>{user}</span>
                </div>
              </div>
              {/* {console.log(items.detail)} */}

              {/* Heading of Blog  */}

              <h1 className="   items-center    flex gap-3 ">
                <span className="italic text-sm md:text-md mt-[0.2rem]">
                  Header:
                </span>
                <div className=" font-bold  sm:text-md mt-[0.1rem]  text-md">
                  {items.header}
                </div>
              </h1>

              {/* {console.log(blogDocs)} */}
              {/* about Blog */}

              {/* Read more */}
              <h1 className="   flex-col  flex gap-3 ">
                <span className="italic  sm:text-md text-sm mt-[0.2rem]">
                  Details:
                </span>
                <div className=" bold text-sm -mt-[0.5rem]">{items.detail}</div>
              </h1>
              {/* read more Section */}

              <div className="flex  gap-1 items-center text-gray-600 underline mt-2 text-md mb-[0.2rem] hover:text-black cursor-pointer ">
                <button onClick={() => handleReadMore(items)}>
                  Read More{" "}
                </button>

                <span>
                  {" "}
                  <IoIosArrowForward size={14} className="mt-[0.15rem]" />
                </span>
              </div>

              {/* Edit and Reaction button */}

              <div className="">
                <div
                  className="  flex justify-center items-center gap-1 px-3 text-center mt-[0.5rem] border  bg-red-600 text-white  rounded-lg hover:cursor-pointer hover:bg-red-800 hover:text-gray-200 "
                  onClick={() => handleEdit(items)}
                >
                  <span>Modify</span>
                  <MdModeEdit size={15} />
                </div>

                <div
                  onClick={() => handleDelete(items._id)}
                  className=" mb-[1rem] flex justify-center items-center gap-1 px-3 text-center mt-[0.5rem] border  bg-red-600 text-white  rounded-lg hover:cursor-pointer hover:bg-red-800 hover:text-gray-200 "
                >
                  <button className="flex  gap-1  justify-center items-center">
                    <span>Delete</span>
                    <AiFillDelete size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCart;
