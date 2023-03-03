import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "/Users/admin/WowTraining/my-app/src/component/CRUD/Style.css"

function Create() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const header = { "Access-Control-Allow-Origin": "*" };
    const history = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log("clicked submit btn");
        axios.post(
            "https://640172393779a8626256f057.mockapi.io/CRUD-gayatri",
            {
                name: name, email: email,
                header,
            }
        )
            .then(() => {
                if ((email === "abc@gmail.com" || email === "xyz@gmail.com") && name !== "") {
                    history("/read")
                } else if (email === "") {
                    alert("please enter valid email")
                } else if (name === "") {
                    alert("please enter your name")
                } else {
                    alert("Sorry! access denied")
                }
            })

    }



    return (
        <>
            <div className='loginPage'>
                <h1 >User Login</h1>
                {/* <Link to="/read">
                    <button className='btn btn-primary'>Show data</button>
                </Link> */}


                <form>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder='Enter your email
                        '/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    {/* {name} {email} */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setName(e.target.value)} autoComplete="off" placeholder='Enter your name' />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                    <Link to="/register">
                        <button type="submit" className="btn btn-primary register">Registration</button>
                    </Link>


                </form>
            </div>

        </>
    )
}
export default Create
