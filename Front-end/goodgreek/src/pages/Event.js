import React, {useEffect} from "react";
import "../css/App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../css/event.css';
import sample from '../assets/sampleposter.jpg';
import axios from 'axios';
import EventsService from "../services/EventsService";

import "bootstrap/dist/css/bootstrap.min.css";

var name;
var org;
var date;
var location;
var description;
var price;
var venmo ;
var benefits;
var charityweb;

const events = [ {
    name: 'Feed the Hungry', datetime: 'Tomorrow', organizer: "Alpha Sig"
  },
];

const test = () => {
  return (
    <div>
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


const Event = () =>{
    var queryParameters = new URLSearchParams(window.location.search)

    const eventdata = () => {
      EventsService.getAllEvents().then((response) => {
        eventdata = Object.keys(response.data);
        console.log(response.data);
        eventdata.map(function(data) {
          name = data.name;
          org = data.organization;
          date = data.date
          location = data.location
          description = data.description
          price = data.price
          venmo = data.venmo
          benefits = data.benefits
          charityweb = data.website
          return (
            <div>
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
      })
    })};

    const id = queryParameters.get("id");

    useEffect(() => {

      EventsService.getEventById(id).then((response) => {
        events = Object.keys(response.data);
        console.log(response.data);
      })

  }, []);

    return (
      <div className="event">
        {Event}
      </div>
    )
}

export default Event