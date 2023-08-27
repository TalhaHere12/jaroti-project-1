// import React from "react";
// import { getusers } from "../../services/user-api";
// import HeaderTop from "../cart-sub-components/HeaderTop";
// import HeaderBottom from "../cart-sub-components/HeaderCenter";
// import Footer from "../cart-sub-components/Footer";
// import { useState,useEffect } from "react";
// import { Link } from "react-router-dom";
// import './styles/Alluser.css'

// function Allusers() {
//     const [users, setUsers] = useState([])
//     const getallusers = async () => {
//         const response = await getusers();
//         setUsers(response.data);
//     }
//     useEffect(() => {
//         getallusers();
//     }, [])
//     let sno="1";
//     return (
//         <>
//             <HeaderTop />
//             <HeaderBottom />
//             <div className="allusers-main">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>UserName</th>
//                             <th>Email</th>
//                             <th>Edit/Delete</th>
                            
//                         </tr>
//                     </thead>
//                     <tbody>
                        
//                             users.map(user => {
//                                 <tr key={user.id}>
//                                     <td>{user.sno}</td>
//                                     <td>{user.username}</td>
//                                     <td>{user.email}</td>
//                                     {/* <td>{user.password}</td> */}
//                                     <td>
//                                         <button>
//                                         <Link >
//                                         <span className="allusers-edit-link"  >Edit</span>
//                                         </Link>
//                                         </button>
//                                         <button className="allusers-delete-link">Delete</button>
//                                     </td>
//                                 </tr>
//                             })
                        
//                     </tbody>
//                 </table>
//             </div>

//             <Footer/>
//         </>
//     )
// }

// export default Allusers
import React, { useState, useEffect } from "react";
import { getusers } from "../../services/user-api";
import HeaderTop from "../cart-sub-components/HeaderTop";
import HeaderBottom from "../cart-sub-components/HeaderCenter";
import Footer from "../cart-sub-components/Footer";
import { Link } from "react-router-dom";
import './styles/Alluser.css'
function Allusers() {
    const [users, setUsers] = useState([]);
    const getallusers = async () => {
        try {
            const response = await getusers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }
    useEffect(() => {
        getallusers();
    }, []);
    const ID=1;
    return (
        <>
            <HeaderTop />
            <HeaderBottom />
            <div className="allusers-main">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,ID) => (
                            <tr key={user.id}>
                                <td>{ID++}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link  to={`/edituser/${user.ID}`}>
                                    <button className="allusers-edit-link" >Edit</button>
                                    </Link>
                                    <button className="allusers-delete-link">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

export default Allusers;
