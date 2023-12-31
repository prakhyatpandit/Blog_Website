import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  // for showing or hiding the add new blogs form

  // For Logged in User 
  const [user, setUser] = useState([]);
  const [blogDocs, setBlogDocs] = useState();

  // for one particular blogs
  const [oneBlog, setOneBlog] = useState(null);
  const [isuser,setIsuser]=useState(false)

  return (
    <>
      <UserContext.Provider
        value={{
      
          blogDocs,
          setBlogDocs,
          user,
          setUser,
          isuser,
          setIsuser,
    
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
