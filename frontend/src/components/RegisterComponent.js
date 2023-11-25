import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import axios from 'axios'

const Login = () => {
  //   const{setUser}=useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();


    if(!email || !name || !password ){

      alert(" Input fields cannot be empty ")
    }
    else{

      
      try{
        
        await axios.post('http://localhost:8000/register',{
          email,password,name
          
        })
        
        alert("Register Done")

  navigate('/')

      

      }
      catch(error){

        setEmail("");
        setPassword("");
        setName("");
    
        alert("Already Used email")}
        
      };
      
    }
      return (
        <>
      <div className=" h-screen  justify-center flex ">
        <div className="  w-[50rem]  h-auto text-xl ">
          <div className=" w-full mt-[3rem]">
            <div className=" mt-6 pl-[4rem] text-3xl ">
              Welcome to Blog Website
            </div>

            <form
              className="flex flex-col  gap-3 mt-5 px-[4rem]   "
              onSubmit={handleSubmit}
            >
              <input
                type="name"
                placeholder="Name"
                className="border p-2 rounded-md px-3 "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded-md px-3 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

         

              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded-md px-3 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="border p-2 bg-green-500 rounded-md px-3 ">
                Register
              </button>
              <span>
                <p>
                  Already Have Account ?
                  <Link to="/login" className="underline cursor-pointer">
                    {" "}
                    Login Here
                  </Link>
                </p>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
