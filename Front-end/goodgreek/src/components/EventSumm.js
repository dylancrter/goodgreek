import React from "react";
import "../css/App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../css/eventsumm.css';
import sample from '../assets/sampleposter.jpg';

import "bootstrap/dist/css/bootstrap.min.css";

const events = [ {
    name: 'Feed the Hungry', datetime: 'Tomorrow', organizer: "Alpha Sig"
  },
];

export default function EventSumm(props) {
  return (
    <div className="event-summary">
      <img src={sample} alt={props.name} style={{ width: '30%', height: '80%'}}/>
        <div className="summary-text">
            <h1 style={{marginBottom: '5%'}}>{props.name}</h1>
            <h2 style={{marginBottom: '2.5%'}}>{props.datetime}</h2>
            <h4 style={{marginBottom: '5%'}}>{props.location}</h4>
            <h2>{props.organizer}</h2>
        </div>
    </div>
  );
}

