import React, { useEffect, useState } from "react";
import "../css/App.css";
import '../css/event.css';
import EventsService from "../services/EventsService";

import image0 from '../assets/donation.png';
import image3 from '../assets/hearthands.jpg';
import image1 from '../assets/unity.jpg';
import image2 from '../assets/volunteer.jpeg';

import "bootstrap/dist/css/bootstrap.min.css";

const Event = () => {
  // State hooks for managing event data and loading state
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Extracting 'id' from URL query parameters
  const id = new URLSearchParams(window.location.search).get("id");

  // useEffect hook to fetch event data by ID on component mount or when 'id' changes
  useEffect(() => {
    try {
      EventsService.getEventById(id).then((response) => {
        setEventData(response.data);
        setLoading(false);
      });
    }
    catch(err) {
      setLoading(false); // Ensure loading is set to false in case of an error
    }
    
  }, [id]); // Dependency array with 'id' to trigger effect when 'id' changes

  // Conditional rendering for loading state
  if (loading) {
    return <div className="text">Loading...</div>;
  }

  // Conditional rendering if no event data is found
  if (!eventData) {
    return <div className="text">No event found</div>;
  }

  // Destructuring eventData for easier access to properties
  const { eventName, organization, date, location, eventDescription, price, venmo, benefits, website, image } = eventData;

  // Rendering event details with conditional image display based on 'image' value
  return (
    <div className="event">
      {image == 0 && <img className="event-image" src={image0}/>}
      {image == 1 && <img className="event-image" src={image1}/>}
      {image == 2 && <img className="event-image" src={image2}/>}
      {image == 3 && <img className="event-image" src={image3}/>}
      <div className="event-info">
        <h1>Name: {eventName}</h1>
        <p>Organizer: {organization}</p>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        {price && <p>Price: {price}</p>}
        {venmo && <p>Venmo: {venmo}</p>}
        {benefits && <p>Benefits: {benefits}</p>}
        {website && <p>Charity Website: {website}</p>}
        <p>Description: {eventDescription}</p>
      </div>
      
    </div>
  );
};

// Exporting the Event component for use in other parts of the application
export default Event;