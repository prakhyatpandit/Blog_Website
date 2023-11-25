import "./App.css";
import { UserContextProvider } from "./UserContext.js";
import OneBlog from "./pages/OneBlog.js";
import Blogs from "./pages/Blogs.js";
import Home from "./pages/Home.js";
import { Route, Routes } from "react-router-dom";
import EditBlog from "./pages/EditBlog.js";
import AddNewBlogs from "./components/AddNewBlogs.js";
import NewBlog from "./components/NewBlog.js";
import AddBlogs from "./pages/AddBlogs.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blogs" element={<Blogs/>}/> */}
        <Route path="/blogs" element={<OneBlog/>}/>
        <Route path ="/edit" element={<EditBlog/>}/>
        <Route path='/new' element={<AddBlogs/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/login" element={<Login/>}/>
        
        
      </Routes>
    </UserContextProvider>
  );
}

export default App;
