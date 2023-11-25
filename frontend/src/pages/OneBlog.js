import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const OneBlog = () => {
  
  const location = useLocation();
  const data = location.state;
  const navigate =useNavigate()

console.log(data)





const handleDelete = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8000/blogs/${id}`);
    if (response.status === 200) {
      // const updateData = ([...cartData])
      // setcartData(updateData.filter((items)=>items._id!==id))
      //  updateData = cartData.filter((_,i)=>i!==index)
      // setcartData(updateData)
      // const updateData = cartData.filter((item) => item._id !== id);
      // setcartData(updateData);

      alert("Deleted Successfully");
      navigate('/')
    } else {
      throw new Error("An error occurred while deleting the item");
    }
  } catch (error) {}
};




  const handleEdit = async (id) => {
    try {
      // const data= await axios.get(`http://localhost:8000/edit/${id}`)

      navigate("/edit", { state: id });

    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <div className>
      <Navbar />

      <div className="  flex justify-center  h-[40rem] sm:h-[50rem] mt-[2rem]  ">
        <div className=" sm:w-[50%] w-[70%] xl:w-[50rem] ">
          <div className="h-[70%] border"></div>
          <div className="flex justify-between gap-[3rem] mx-[2rem]">
            <span>Name of User</span>
            <span>Date</span>
          </div>

          <div>
            <div className="text-2xl mt-[1rem] font-semibold  ">
              {data.header}
            </div>

            <div className="italic mt-[1rem] ">{data.detail}</div>
            {console.log(data)}
          </div>
          <div className="flex flex-col">
            <button
              onClick={()=>handleEdit(data)}
              className="border rounded-[20px] p-2 mt-[2rem] bg-green-600 text-white hover:cursor-pointer hover:bg-green-800 hover:text-gray-200 "
            >
              Edit
            </button>
            <button
              onClick={()=>handleDelete(data._id)}
              className="border rounded-[20px] p-2 mt-[1rem] bg-green-600 text-white hover:cursor-pointer hover:bg-green-800 hover:text-gray-200 "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBlog;
