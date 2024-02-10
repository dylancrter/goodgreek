import React, { useEffect } from 'react'
import UserService from '../services/UserService'

export default function ListUserComponent() => {
  
    const [users, setUsers] = useState([])

    useEffect(() => {
        
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, []}

    return (
        <div className = "container">
            <h1 className = "text-center"> List Users </h1>
            <table className = "tabke table-bordered table-striped">
            <thead>
                <th> User Id </th>
                <th> User First Name </th>
                <th> User Last Name </th>
                <th> User Email Id </th>
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
