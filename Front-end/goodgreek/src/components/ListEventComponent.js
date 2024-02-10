import React from 'react'

export default function ListEventComponent() => {
  
    const [events, setEvents] = useState([])

    return (
        <div className = "container">
            <h1 className = "text-center"> List Events </h1>
            <table className = "tabke table-bordered table-striped">
            <thead>
                <th> Event Id </th>
                <th> Event First Name </th>
                <th> Event Last Name </th>
                <th> Event Email Id </th>
                </thead>
                <tbody>
                    {
                        events.map(
                            event =>
                            <tr key = {event.id}>
                                <td> {event.id} </td>
                                <td> {event.firstName} </td>
                                <td> {event.lastName} </td>
                                <td> {event.emailId} </td> 
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}
