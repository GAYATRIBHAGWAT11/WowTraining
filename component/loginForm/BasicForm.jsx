import React from 'react'
import { useState } from 'react';

export default function BasicForm() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [allEntry, setallEntry] = useState([])

    console.log(Email, Password);


    const submitForm = (e) => {
        e.preventDefault()
        const newEntry = { Email: Email, Password: Password }
        setallEntry([...allEntry, newEntry]);
    }
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

            </form>


            <div>
                {
                    allEntry.map((curElem) => {
                        return (
                            <div className='showDataStyles'>
                                <p>{curElem.Email}</p>
                                <p>{curElem.Password}</p>

                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}
