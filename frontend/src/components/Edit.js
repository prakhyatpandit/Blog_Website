import React, {  useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const location = useLocation();
  const data = location.state;
  const id = data._id

  const navigate = useNavigate();

  const [header, setHeader] = useState("");
  const [detail, setDetail] = useState("");

  // for closing the form
  const [image, setImage] = useState("");
  const onCrusor = () => {
    navigate("/");
  };

  useEffect(() => {
    // Set initial state when the component mounts
    setHeader(data.header || "");
    setDetail(data.detail || "");
  }, [data.header, data.detail,data.image]);

  const handleAddnew = () => {};

  // submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!header || !detail) {
      alert("All field are must");
    } else {
      try {
        const dataa = { header, detail,image };

        const response = await axios.put(`http://localhost:8000/edit/${id}`, dataa);
        

alert("Edited Successfully")
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }

    
  };


  return (
    <>
      <div className="flex flex-col w-full items-center">
        <div className=" md:w-[75%] xl:w-[50%]     ">
          {/* Close Button */}
          <div className="flex justify-end mt-[1rem] mx-[1rem]">
            <button onClick={onCrusor}>
              <RxCross2 size={25} />
            </button>
          </div>

          <div className="text-center text-xl mb-[1rem] font-bold">Edit blog </div>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-[2rem] flex flex-col gap-[1rem] px-[2rem]"
          >
            <input
              type="text"
              placeholder="Write about the blog heading "
              className=" px-[1rem] border rounded-md p-1 outline-none border-gray-600 "
              value={header}
          
              onChange={(e) =>setHeader(e.target.value)}
            />
            <textarea
              className="border outline-none min-h-[4rem] mt-[0.5rem] p-[0.2rem] px-[1rem] border-gray-400 rounded-md "
              placeholder="Write about the blog....."
              value={detail}
        
              onChange={(e) =>setDetail(e.target.value)}
            ></textarea>
            <div className="flex flex-col">
              <span>Upload photo </span>
              <input type="file" name="file" />
              {/* <button className="text-left flex gap-1 border border-gray-600 w-[10rem] px-4 p-1 mt-2 bg-gray-300" onClick={handleUpload} >
        <span> Choose photo </span>
        <LuUpload  size={20}/>
        
      </button> */}

              {/* Preview Image */}

              {/* Upload button */}

              <button
                onClick={handleAddnew}
                className="border rounded-[20px] p-2 mt-[2rem] bg-green-600 text-white hover:cursor-pointer hover:bg-green-800 hover:text-gray-200 "
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
