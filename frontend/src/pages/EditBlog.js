import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { RxCross2 } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Edit from "../components/Edit";

const EditBlog = () => {
  const location = useLocation();
  const data = location.state;
  const id = data._id
  const { blogDocs, setBlogDocs } = useContext(UserContext);

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
  }, [data.header, data.detail]);

  const handleAddnew = () => {};

  // submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!header || !detail) {
      alert("All field are must");
    } else {
      try {
        const dataa = { header, detail };

        const response = await axios.put(`http://localhost:8000/edit/${id}`, dataa);
        


        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }

    
  };


  return (
    <>
      <div className="flex flex-col items-center">
        <Navbar />
        <Edit/>
      </div>
    </>
  );
};

export default EditBlog;
