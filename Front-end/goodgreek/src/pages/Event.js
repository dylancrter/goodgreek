import React, { useEffect, useState } from "react";
import "../css/App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../css/event.css';
import sample from '../assets/sampleposter.jpg';
import axios from 'axios';
import EventsService from "../services/EventsService";

import donation from '../assets/donation.png';
import unity from '../assets/unity.jpg';
import volunteer from '../assets/volunteer.jpeg';
import hearthands from '../assets/hearthands.jpg';

import "bootstrap/dist/css/bootstrap.min.css";

const Event = () => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  const images = {donation, unity, volunteer, hearthands};

  const id = new URLSearchParams(window.location.search).get("id");

  useEffect(() => {
    try {
      EventsService.getEventById(id).then((response) => {
        setEventData(response.data);
        setLoading(false);
      });
    }
    catch(err) {
      setLoading(false);
    }
    
  }, [id]);

  if (loading) {
    return <div className="whitetext">Loading...</div>;
  }

  if (!eventData) {
    return <div className="whitetext">No event found</div>;
  }

  const { eventName, organization, date, location, eventDescription, price, venmo, benefits, website, image } = eventData;

  return (
    <div className="event">
      <image src={images[image]}></image>
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

export default Event;