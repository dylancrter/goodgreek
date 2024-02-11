/*
import React {useState} from 'react'

export const AddEventComponent = () => {
  
    const [id, setId] = useState('')
    const [organization, setOrganization] = useState('')
    const [eventName, setEventName] = useState('')
    const [price, setPrice] = useState('')
    const [venmo, setVenmo] = useState('')
    const [benefits, setBenefits] = useState('')
    const [website, setWebsite] = useState('')
    
    const saveEvent = (e) => {
        e.preventDefault();

        const event = {firstName, lastName, email}

        console.log(event);
    }

    return (
        <div> 

            <div className = "container">
                <div className="row">
                    <div className = "card col-md-6 offset-md-3 offset-3">
                        <h2 className = "text-center"> Add Event </h2>
                        <div className =  "card-body">
                            <form>
                                <div className = "form-label mb-2"> 
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                    type = "text"
                                    placeholder = "First Name"
                                    name = "firstName"
                                    className = "form-control"
                                    value = {firstName}
                                    onChange = {e => setFirstName(e.target.value)}
                                >
                                </input>
                            </div>
                        
                            <div className = "form-label mb-2"> 
                                <label className = "form-label"> Last Name :</label>
                                <input
                                    type = "text"
                                    placeholder = "Last Name"
                                    name = "lastName"
                                    className = "form-control"
                                    value = {lastName}
                                    onChange = {e => setLastName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className = "form-label mb-2">
                                <label className = "form-label"> Email :</label>
                                <input
                                    type = "text"
                                    placeholder = "Email"
                                    name = "email"
                                    className = "form-control"
                                    value = {email}
                                    onChange = {e => setEmail(e.target.value)}
                                >
                                </input>
                            </div>

                            
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddEventComponent;
*/