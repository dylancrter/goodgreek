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
        <a></a>
        <img src={sample} alt={props.name} style={{ width: '250px', height: '300px'}}/>
        <div className="summary-text">
            <h1>{props.name}</h1>
            <h2>{props.datetime}</h2>
            <h3>{props.organizer}</h3>
        </div>
    </div>
  );
}
