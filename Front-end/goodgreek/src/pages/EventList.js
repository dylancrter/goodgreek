import { useEffect, useState } from "react";
import EventSumm from "../components/EventSumm";
import '../css/eventlist.css';
import EventsService from "../services/EventsService";
import {Link} from "react-router-dom";
import { redirect } from "react-router-dom";


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
      

      <title>Good Greek</title>
      <h1>Events</h1>
      {events.map((event, index) => (
        <Link to={"/id/" + event.id}>
          <EventSumm key={index} name={event.eventName} datetime={event.date} organizer={event.organization}/>
        </Link>
      ))}
      {events.length === 0 && (
        <EventSumm name="Poopy" datetime="Febuary 7 @ 5:00pm" organizer="Alpha Sigma Phi"/>
      )}
    </div>
  );
};

export default EventList;
