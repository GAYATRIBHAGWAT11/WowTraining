import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


let count=0
export default function Read() {

    // my operation
    const [data, setData] = useState([])
    function getData() {
        axios.get("https://640172393779a8626256f057.mockapi.io/CRUD-gayatri")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    // delete fun

    function handleDelete(id) {
        axios.delete(`https://640172393779a8626256f057.mockapi.io/CRUD-gayatri/${id}`)
            .then(() => {
                getData()
            })
    }


    function setToLocalStorage(id, name, email) {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }




    return (
        <>
            <div className='d-flex justify-content-between'>
                <h2 className='empData'>Employee data </h2>
                {/* <Link to="/">
                    <button className='btn btn-secondary'>create</button>
                </Link> */}
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>

                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <th>{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <Link to="/update">
                                            <td><button className='btn-success editbtn' onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</button></td>
                                        </Link>
                                        <td><button className='btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button></td>
                                    </tr>
                                </tbody>


                            </>
                        )
                    })



                }
                

            </table>

            


        </>
    )
}
