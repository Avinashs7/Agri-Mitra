import React,{ useContext,createContext, useState, useEffect } from "react";
import axios from 'axios'

const users=createContext(null);

export const useUser=()=>{
    return useContext(users);
}

export const userProvider=(props)=>{
    const [user,setUser]=useState({});
    const [login,setLogin]=useState(false);
    useEffect(()=>{
        if(localStorage.getItem("accessToken")===undefined)
            setLoginDetails(false);
    },[login])
    
    const logout=async()=>{
        await axios.post(`${import.meta.env.SERVER_URL}/user/logout`)
        .then(()=>{
            localStorage.clear("accessToken");
            localStorage.clear("refreshToken");
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    
    return (
        <users.Provider value={{loginUser,setLoginDetails,setsignUpDetails,signup,user,login,logout}}>
            {props.children}
        </users.Provider>
    );
}