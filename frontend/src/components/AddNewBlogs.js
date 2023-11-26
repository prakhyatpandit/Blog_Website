import React, {  useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import {useNavigate } from "react-router-dom";


const AddNewBlogs = () => {
  const navigate = useNavigate();


  const [header, setHeader] = useState("");
  const [detail, setDetail] = useState("");

  // for closing the form
  const [image, setImage] = useState("");
  const onCrusor = () => {
    navigate("/");
  };


  // submit the form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!header || !detail) {
//       alert("All field are must");
//     } else {
//       try {
//         const response = await axios.post("http://localhost:8000/upload", {
//           header,
//           detail,
//           image,
//         });
// navigate('/')
//       } catch (error) {
//         console.log(error);
//       }
//     }

//   };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!header || !detail || !image) {
    alert('All fields are required');
  } else {
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('header', header);
      formData.append('detail', detail);

      const response = await axios.post('http://localhost:8000/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      // Navigate or perform additional actions after successful submission
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
};






  
  
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    
    console.log(e.target.files[0])
    setImage(e.target.files[0])
// const reader = new FileReader()
// reader.readAsDataURL(e.target.files[0]);
// reader.onload=()=>{
//   setImage(reader.result)
//   console.log(reader.result)
// }
// reader.onerror=error=>{
//   console.log(error)
// }


};


  return (
    <>
      <div className=" w-full md:w-[75%] xl:w-[50%]     ">
        {/* Close Button */}
        <div className="flex justify-end mt-[1rem] mx-[1rem]">
          <button onClick={onCrusor}>
            <RxCross2 size={25} />
          </button>
        </div>

        <div className="text-center text-xl mb-[1rem] font-bold">Add new blogs</div>
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
            onChange={(e) => setHeader(e.target.value)}
          />
          <textarea
            className="border outline-none min-h-[4rem] mt-[0.5rem] p-[0.2rem] px-[1rem] border-gray-400 rounded-md "
            placeholder="Write about the blog....."
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
          <div className="flex flex-col">
            <span>Upload photo </span>
            <input type="file" name="image" onChange={handleImageChange} />
            {image===""|| image===null ? "":
  <img width={100} height={100} src={image} />
}


            <button
              className="border rounded-[20px] p-2 mt-[2rem] bg-green-600 text-white hover:cursor-pointer hover:bg-green-800 hover:text-gray-200 "
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewBlogs;
