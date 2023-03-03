import React, { useContext } from "react";
import { varContext } from "/Users/admin/WowTraining/my-app/src/component/CreateContext.jsx";


const UseContextFun = () => {
    const { data } = useContext(varContext)

    console.log("im children", data);
    return (
        <>
            {data.map((items) =>
            (
                <>
                    <h1>{items.name}</h1>
                    <h1>{items.email}</h1>
                </>
            ))}
        </>
    )
}
export default UseContextFun;