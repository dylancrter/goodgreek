import React from "react";
import "../css/App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../css/event.css';
import sample from '../assets/sampleposter.jpg';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";

const events = [ {
    name: 'Feed the Hungry', datetime: 'Tomorrow', organizer: "Alpha Sig"
  },
];

export default function EventSumm(props) {
    const queryParameters = new URLSearchParams(window.location.search)
    const name = queryParameters.get("name");
    const org = queryParameters.get("org");
    const date = queryParameters.get("date");
    const location = queryParameters.get("location");
    const description = queryParameters.get("description");
    const price = queryParameters.get("price");
    const venmo = queryParameters.get("venmo");
    const benefits = queryParameters.get("benefits");
    const charityweb = queryParameters.get("charityweb");

    return (
      <div className="event">
        <h1>Name: {name}</h1>
        <p>Organizer: {org}</p>
        <p>Date: {date}</p>
        <p>Location: {location}</p>

        {price != null &&
          <p>Price: {price}</p>
        }
        
        {venmo != null &&
          <p>Venmo: {venmo}</p>
        }

        {benefits != null &&
          <p>Benefits: {benefits}</p>
        }

        {charityweb != null &&
          <p>Charity Website: {charityweb}</p>
        } 

        <p>Description: {description}</p>

      </div>
    )
}