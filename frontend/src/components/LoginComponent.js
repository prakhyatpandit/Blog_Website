import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
import { RxCross2 } from "react-icons/rx";

const Login = () => {
  const navigate = useNavigate();
  // For getting the user
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      const userInfo = response.data.name;

      setUser(userInfo);
      alert("Login successfully");
      navigate("/");
      // console.log(userInfo.data.name)
      // console.log(user)
      // console.log(userInfo.name)
    } catch (e) {
      alert("not OK");
      setEmail("");
      setPassword("");
    }
  };
  const onCrusor = () => {
    navigate("/");
  };

  return (
    <>
      <div className=" h-screen  mt-[5rem] justify-center flex ">
        <div className="  w-[50rem]  h-auto text-xl ">
          <div className=" w-full mt-[3rem]">
            <div className="flex justify-end mt-[1rem] mx-[1rem]">
              <button onClick={onCrusor}>
                <RxCross2 size={25} />
              </button>
            </div>
            <div className=" mt-6 pl-[4rem] text-3xl ">Login </div>

            <form
              className="flex flex-col  gap-3 mt-5 px-[4rem]   "
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Email or Phone"
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
                Login
              </button>

              <span>
                <p>
                  Dont Have Account ?
                  <Link to="/register" className="underline cursor-pointer">
                    {" "}
                    Register Here
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
