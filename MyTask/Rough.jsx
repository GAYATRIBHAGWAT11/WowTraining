import React, { useContext, useState } from 'react'
import { varContext } from '/Users/admin/WowTraining/my-app/src/MyTask/SignIn.jsx'

export default function Rough() {
    const SignInData = useContext(varContext)
    // const [editData, setEditData]=useState()
    const [isEdit, setEdit] =useState(false);
    let [array,setArray]=useState(SignInData)
    // const [contacts,setContacts]=useState(data)

    const onEdit = (id) => {

    }

    const onDelete = (id) => {
        // id==!id
        console.log(id,"this row is gonn delete");
        let total=[...array]
        total.splice(id, 1)
        setArray(total)
        

    }

    console.log("rough", SignInData);



    return (
        <>
            <h1>employee data</h1>
            <table>
                <tr>
                    <th>Eid</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Operations</th>

                </tr>

                {
                    SignInData&&SignInData.map((items, index) => {
                        return (

                            <tr key={index}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td><button onClick={()=>onEdit(items.id)}>Edit</button>
                                <button onClick={()=>onDelete(items.id)}>Delete</button></td>
                            </tr>

                        )
                    })
                }
            </table>

        </>
    )
}
