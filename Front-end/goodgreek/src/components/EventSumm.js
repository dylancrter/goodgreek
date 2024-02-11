import React from "react";
import "../css/App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../css/eventsumm.css';
import sample from '../assets/sampleposter.jpg';

import image0 from '../assets/donation.png';
import image1 from '../assets/unity.jpg';
import image2 from '../assets/volunteer.jpeg';
import image3 from '../assets/hearthands.jpg';

import "bootstrap/dist/css/bootstrap.min.css";

const events = [ {
    name: 'Feed the Hungry', datetime: 'Tomorrow', organizer: "Alpha Sig"
  },
];

export default function EventSumm(props) {
  return (
    <div className="event-summary">
        {image == 0 && <img className="event-image" src={image0} style={{ width: '30%', height: '80%'}}/>}
        {image == 1 && <img className="event-image" src={image1} style={{ width: '30%', height: '80%'}}/>}
        {image == 2 && <img className="event-image" src={image2} style={{ width: '30%', height: '80%'}}/>}
        {image == 3 && <img className="event-image" src={image3} style={{ width: '30%', height: '80%'}}/>}
        <div className="summary-text">
            <h1 style={{marginBottom: '5%'}}>{props.name}</h1>
            <h2 style={{marginBottom: '2.5%'}}>{props.datetime}</h2>
            <h4 style={{marginBottom: '5%'}}>{props.location}</h4>
            <h2>{props.organizer}</h2>
        </div>
    </div>
  );
}

