import { useEffect, useState, Image } from "react";
import EventSumm from "../components/EventSumm";
import '../css/eventlist.css';
import EventsService from "../services/EventsService";
import {Link} from "react-router-dom";
import { redirect } from "react-router-dom";
import AddEventButton from '../components/AddEventButton';

import image0 from '../assets/donation.png';
import image1 from '../assets/unity.jpg';
import image2 from '../assets/volunteer.jpeg';
import image3 from '../assets/hearthands.jpg';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    EventsService.getAllEvents().then((response) => {
      setEvents(response.data);
    });

  }, []);

  return (
    <div className="event-list">
      {!sessionStorage.isLoggedIn && (
        <meta http-equiv="Refresh" content="0; url='/signin'" />
      )}

      <title>GoodGreek</title>
      <h1>Philanthropic Events</h1>
      {events.map((event, index) => (
        <Link to={"/event?id=" + event.id} style={{ textDecoration: 'none', color: "inherit" }}>
          <EventSumm image={image} key={index} name={event.eventName} datetime={event.date} location={event.location} organizer={event.organization}/>
        </Link>
      ))}
      {events.length === 0 && (
        <EventSumm  image='0' name="Chipotle Fundraiser" datetime="January 31, 5-9pm" location="165 Alps Rd, Athens, GA 30606" organizer="Alpha Sigma Phi"/>
      )}
      <AddEventButton />
    </div>
  );
};

export default EventList;
