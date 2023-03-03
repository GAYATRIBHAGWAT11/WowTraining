import React from 'react'
import Create from '../CRUD/Create'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from '/Users/admin/WowTraining/my-app/src/component/CRUD/Read.jsx'
import Update from '/Users/admin/WowTraining/my-app/src/component/CRUD/Update.jsx'
import Registration from '/Users/admin/WowTraining/my-app/src/component/CRUD/Registration.jsx'



export default function First({email}) {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Create />} />
                    <Route exact path="/read" element={<Read />} />
                    <Route exact path="/update" element={<Update />} />
                    <Route exact path="/register" element={<Registration />} />


                </Routes>

            </BrowserRouter>

        </>
    )
}
