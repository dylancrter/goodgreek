import axios from 'axios';
import React, { useState } from 'react';
import '../css/EventCreation.css';

export const EventCreation = () => {
    const [benefits, setBenefits] = useState('');
    const [date, setDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventName, setEventName] = useState('');
    const [location, setLocation] = useState('');
    const [organization, setOrganization] = useState('');
    const [price, setPrice] = useState('');
    const [venmo, setVenmo] = useState('');
    const [website, setWebsite] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();



        try {
          const response = await axios.post('http://localhost:3306/api/events/', {
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

            if (response.ok) {
                console.log('User saved successfully');
                // Set cookie after successful user save
            } else {
                console.log('Failed to save user');
            }
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    return (
              <div className="event-creation-card">
                  <h2 className="text-center"> Create An Event! </h2>
                  <div className="paper-body">
                      <form onSubmit={handleSubmit}>
                          <div className="form-label mb-2 eventrow">
                              <label className="form-label eventlabel"> Name:</label>
                              <input
                                  type="text"
                                  placeholder="Event Name"
                                  name="eventName"
                                  className="form-control"
                                  value={eventName}
                                  onChange={e => {
                                      setEventName(e.target.value);
                                      console.log(e.target.value);
                                  }}
                              />
                          </div>

                          <div className="form-label mb-2 eventrow">
                              <label className="form-label eventlabel"> Date:</label>
                              <input
                                  type="text"
                                  placeholder="Date"
                                  name="date"
                                  className="form-control"
                                  value={date}
                                  onChange={e => setDate(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>

                          <div className="form-label mb-2 eventrow">
                              <label className="form-label eventlabel"> Location:</label>
                              <input
                                  type="text"
                                  placeholder="Location"
                                  name="location"
                                  className="form-control"
                                  value={location}
                                  onChange={e => setLocation(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>

                          <div className="form-label mb-2 eventrow">
                              <label className="form-label eventlabel"> Organization:</label>
                              <input
                                  type="text"
                                  placeholder="Organization"
                                  name="organization"
                                  className="form-control"
                                  value={organization}
                                  onChange={e => setOrganization(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>
                          <div className="form-label mb-2 eventrow">
                              <label className="form-label eventlabel"> Price:</label>
                              <input
                                  type="text"
                                  placeholder="Price"
                                  name="price"
                                  className="form-control"
                                  value={price}
                                  onChange={e => setPrice(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>
                          <div className="form-label mb-2 eventrow">
                              <label className="form-label eventlabel"> Venmo:</label>
                              <input
                                  type="text"
                                  placeholder="Venmo"
                                  name="venmo"
                                  className="form-control"
                                  value={venmo}
                                  onChange={e => setVenmo(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>
                          <div className="form-label mb-2 eventrow">
                              <label className="form-label eventlabel"> Website:</label>
                              <input
                                  type="text"
                                  placeholder="Website"
                                  name="website"
                                  className="form-control"
                                  value={website}
                                  onChange={e => setWebsite(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>
                          <div className="form-label mb-2 eventrow">
                              <label className="form-label eventlabel"> Benefits:</label>
                              <input
                                  type="text"
                                  placeholder="Benefits"
                                  name="benefits"
                                  className="form-control"
                                  value={website}
                                  onChange={e => setBenefits(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>
                          <div className="form-label mb-2 eventrow">
                              <label className="form-label eventlabel"> Description:</label>
                              <input
                                  type="text"
                                  placeholder="Event Description"
                                  name="eventDescription"
                                  className="form-control"
                                  value={eventDescription}
                                  onChange={e => setEventDescription(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>

                          <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                  </div>
              </div>
    );
};