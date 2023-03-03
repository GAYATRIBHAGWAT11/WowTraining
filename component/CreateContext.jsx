import React, { createContext, useEffect, useState } from "react";
import axios from "axios"

let varContext=createContext()
const CreateContextFun=({children})=>{

    const [data, setMyData]=useState([])

    useEffect(()=>{
        axios.get('https://6365e4d8046eddf1baf48aba.mockapi.io/user_data').then((val)=>{
            // console.log(val);
            setMyData(val.data)
        })
    },[])
    return(
        <>
        <varContext.Provider value={{data}}>
            {children}
        </varContext.Provider>

        </>
    )
}
export {varContext,CreateContextFun};