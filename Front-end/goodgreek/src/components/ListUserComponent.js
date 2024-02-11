
import axios from 'axios';
import React, { useEffect } from 'react';

const API_URL = 'http://localhost:3001';

export default function ListUserComponent() {
  
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getAllUsers = () => {
            const API_URL = 'http://localhost:3001'; // Make sure to include the protocol (http:// or https://)
            return axios.get(API_URL)
                .then(response => {
                    // handle response here
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        getAllUsers(); // Call the function
    }, []); // Dependency array for useEffect

    return (
        <div className = "container">
            <h1 className = "text-center"> List Users </h1>
            <Link to = "/add-user" className = "btn btn-primary mb-2" > Add User </Link>
            <table className = "tabke table-bordered table-striped">
            <thead>
                <th> User Id </th>
                <th> User Name </th>
                <th> User Email </th>
                <th> User Password </th>
                <th> User Organization </th>
                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}>
                                <td> {user.id} </td>
                                <td> {user.firstName} </td>
                                <td> {user.lastName} </td>
                                <td> {user.emailId} </td> 
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
