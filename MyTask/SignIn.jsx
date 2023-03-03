// https://raw.githubusercontent.com/GAYATRIBHAGWAT11/LoginFormJsonData/master/Data.json
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


let varContext = createContext()
function SignIn({ children }) {
    const [SignInData, setSignInData] = useState([])

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/GAYATRIBHAGWAT11/LoginFormJsonData/master/Data.json").then((val) => {
            // console.log(val.data);\
            setSignInData(val.data)
        })

    }, [])

    return (
        <>
            <varContext.Provider value={SignInData}>
                {children}
            </varContext.Provider>
        </>
    )
}
export {varContext, SignIn}