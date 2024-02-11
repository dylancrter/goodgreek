import { useEffect, useState } from "react";
import EventSumm from "../components/EventSumm";
import '../css/eventlist.css';
import EventsService from "../services/EventsService";
import {Link} from "react-router-dom";


const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    EventsService.getAllEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div className="event-list">
      <title>GoodGreek</title>
      <h1>Philanthropic Events</h1>
      {events.map((event, index) => (
        <Link to={"/id/" + event.id}>
          <EventSumm key={index} name={event.eventName} datetime={event.date} location={event.location} organizer={event.organization}/>
        </Link>
      ))}
      {events.length === 0 && (
        <EventSumm name="Chipotle Fundraiser" datetime="January 31, 5-9pm" location="165 Alps Rd, Athens, GA 30606" organizer="Alpha Sigma Phi"/>
      )}
    </div>
  );
};

export default EventList;
