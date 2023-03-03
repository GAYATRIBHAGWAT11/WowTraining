// import React, { useEffect, useState } from "react";


// const Index = () => {

//     const [data, setData] = useState([])

//     // get api
//     useEffect(() => {
//         const url = "https://jsonplaceholder.typicode.com/todos/1"
//         fetch(url)
//             .then(res => res.json()).then(json => {
//                 console.log(json);
//                 setData(json)
//             })
//             .catch(e => {
//                 console.log("error", e);
//             })
//     }, [])


//     // post & put api
//     const postPutEvent = () => {
//         const data={
//             name:"gayatri",
//             mobile:"7388349475",
//             designation:"developer",
//             pin:"42343"
//         }
//         const url = "https://jsonplaceholder.typicode.com/todos/1"
//         fetch(url), {
//             method:"POST",
//             headers:{
//                 "content-type":"application/json"
//             },
//             body:JSON.stringify()
//         }
//             .then(res =>{
                
//             }
//                 setData(json)
//             })
//             .catch(e => {
//                 console.log("error", e);
//             })
//     }, [])

//     }

//     return (
//         <div className="Cont">
//             <h1>welcome</h1>
//             {
//                 data.map(items => {
//                     return (
//                         <div>{items.title}</div>
//                     )
//                 })
//             }


//             <button onClick={postPutEvent}>submit</button>

//         </div>
//     )
// }
// export default Index;