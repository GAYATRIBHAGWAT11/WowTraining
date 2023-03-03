import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Update() {

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
        console.log(localStorage.getItem("email"));

    }, [])

    function handleUpdate(e) {
        e.preventDefault()
        axios.put(`https://640172393779a8626256f057.mockapi.io/CRUD-gayatri/${id}`,
            {
                name: name,
                email: email,
            }
        ).then(() => {
            navigate("/read")
        });

    }

    return (
        <>
            <h1 className='d-flex justify-content-around'>Update Data</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                {/* {name} {email} */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>


                <Link to="/read">
                    <button type="submit" className='btn btn-secondary mx-2'>Back</button>
                </Link>
            </form>

        </>
    )
}
