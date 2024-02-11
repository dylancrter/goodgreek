import React from "react";
import "../css/App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../css/AddEventButton.css';
import sample from '../assets/sampleposter.jpg';
import {Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const events = [ {
    name: 'Feed the Hungry', datetime: 'Tomorrow', organizer: "Alpha Sig"
  },
];

export default function EventSumm(props) {
  return (
    <Link to="/new-event">
        <div className="event-adder">
            <div className="add-button">
                <h1 className="add-plus">+</h1>
            </div>
        </div>
    </Link>
  );
}

