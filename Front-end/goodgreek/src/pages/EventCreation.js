import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/EventCreation.css';

export const EventCreation = () => {
    // State hooks to store form inputs
    const [benefits, setBenefits] = useState('');
    const [date, setDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventName, setEventName] = useState('');
    const [location, setLocation] = useState('');
    const [organization, setOrganization] = useState('');
    const [price, setPrice] = useState('');
    const [venmo, setVenmo] = useState('');
    const [website, setWebsite] = useState('');

    const navigate = useNavigate(); // Hook to navigate between routes

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submit action

        try {
            // Making a POST request to create a new event
            const response = await axios.post('http://localhost:3306/api/event/events', {
                benefits,
                date,
                eventDescription,
                eventName,
                location,
                organization,
                price,
                venmo,
                website
            });

            // Handling response
            if (response.status === 200) {
                console.log('Event created successfully');
                // Optionally, navigate to another page or show a success message
            } else {
                console.log('Failed to create event');
            }
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    // Function to navigate back to the home page
    const handleExit = () => {
        navigate("/"); // Using the navigate hook to redirect to the home page
    };

    // JSX for rendering the event creation form
    return (
        <div className="event-creation-card">
            <button style={{marginLeft:'93%'}}type="button" className="btn btn-secondary mt-2" onClick={handleExit}>Exit</button>
            <h2 className="text-center">Create An Event!</h2>
            <div className="paper-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-label mb-2 eventrow">
                        <label className="form-label eventlabel">Name:</label>
                        <input
                            type="text"
                            placeholder="Event Name"
                            name="eventName"
                            className="form-control"
                            value={eventName}
                            onChange={e => setEventName(e.target.value)}
                        />
                    </div>

                    <div className="form-label mb-2 eventrow">
                        <label className="form-label eventlabel">Date:</label>
                        <input
                            type="text"
                            placeholder="Date"
                            name="date"
                            className="form-control"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </div>

                    <div className="form-label mb-2 eventrow">
                        <label className="form-label eventlabel">Location:</label>
                        <input
                            type="text"
                            placeholder="Location"
                            name="location"
                            className="form-control"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                    </div>

                    <div className="form-label mb-2 eventrow">
                        <label className="form-label eventlabel">Organization:</label>
                        <input
                            type="text"
                            placeholder="Organization"
                            name="organization"
                            className="form-control"
                            value={organization}
                            onChange={e => setOrganization(e.target.value)}
                        />
                    </div>

                    <div className="form-label mb-2 eventrow">
                        <label className="form-label eventlabel">Price:</label>
                        <input
                            type="text"
                            placeholder="Price"
                            name="price"
                            className="form-control"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="form-label mb-2 eventrow">
                        <label className="form-label eventlabel">Venmo:</label>
                        <input
                            type="text"
                            placeholder="Venmo"
                            name="venmo"
                            className="form-control"
                            value={venmo}
                            onChange={e => setVenmo(e.target.value)}
                        />
                    </div>

                    <div className="form-label mb-2 eventrow">
                        <label className="form-label eventlabel">Website:</label>
                        <input
                            type="text"
                            placeholder="Website"
                            name="website"
                            className="form-control"
                            value={website}
                            onChange={e => setWebsite(e.target.value)}
                        />
                    </div>

                    <div className="form-label mb-2 eventrow">
                        <label className="form-label eventlabel">Benefits:</label>
                        <input
                            type="text"
                            placeholder="Benefits"
                            name="benefits"
                            className="form-control"
                            value={benefits}
                            onChange={e => setBenefits(e.target.value)}
                        />
                    </div>

                    <div className="form-label mb-2 eventrow">
                        <label className="form-label eventlabel">Description:</label>
                        <input
                            type="text"
                            placeholder="Event Description"
                            name="eventDescription"
                            className="form-control"
                            value={eventDescription}
                            onChange={e => setEventDescription(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};
