import React, { useContext, useEffect, useState } from 'react'
import { varContext } from '/Users/admin/WowTraining/my-app/src/MyTask/SignIn.jsx'
import Rough from '/Users/admin/WowTraining/my-app/src/MyTask/Rough.jsx'


let getData1;
export default function UseSignInData() {

    const SignInData = useContext(varContext)

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [allEntry, setallEntry] = useState([])

    // const [mappedVal, setMappedVal] = useState("")


    const submitForm = (e) => {
        e.preventDefault()
        const newEntry = { Email: Email, Password: Password }
        setallEntry([...allEntry, newEntry])
        localStorage.setItem("Em", newEntry.Email)

    }

    getData1 = JSON.parse(JSON.stringify(localStorage.getItem("Em")))
    console.log(typeof getData1);

    // const logoutFun=()=>{
    //     localStorage.clear()
    // }


    return (
        <>
            <form action='' onSubmit={submitForm}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name="email" id="email" autoComplete='off' value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="text" name="password" id="password" value={Password} autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type='submit'>Login</button>
                {/* <button onClick={logoutFun}>Log Out</button> */}

            </form>

            {SignInData.map((items) => {

                return (items.email.includes(getData1) && getData1 !== "" ?<Rough/>  : null
                )

            })}
        </>
    )
}
// JSON.parse(JSON.stringify(sessionStorage.getItem("email")))