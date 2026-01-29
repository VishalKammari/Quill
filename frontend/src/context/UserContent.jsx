import { createContext,useEffect,useState } from "react";
export const UserContext = createContext({});
import {URL} from "../url";
import axios from "axios";
export const UserContextProvider = ({ children }) => {
    const[user,setUser]=useState(null);

    useEffect(()=>{
        getUser();
    },[]);

    const getUser = async () => {
  try {
    const res = await axios.get(
      `${URL}api/auth/refetch`,
      { withCredentials: true }
    );
    setUser(res.data);
  } catch (err) {
    if (err.response?.status === 401) {
      setUser(null); 
    } else {
      console.log(err);
    }
  }
};
    return (
    <UserContext.Provider value={{ user,setUser,getUser }}>
      {children}
    </UserContext.Provider>
  );
}


