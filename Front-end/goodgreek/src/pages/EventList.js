import { useEffect, useState } from "react";
import EventSumm from "../components/EventSumm";
import '../css/eventlist.css';
import EventsService from "../services/EventsService";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    EventsService.getAllEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div className="event-list">
      <title>Good Greek</title>
      <h1>Events</h1>
      {events.map((event, index) => (
        <EventSumm key={index} name={event.eventName} datetime={event.date} organizer={event.organization}/>
      ))}
      {events.length === 0 && (
        <EventSumm name="Poopy" datetime="Febuary 7 @ 5:00pm" organizer="Alpha Sigma Phi"/>
      )}
    </div>
  );
};

export default EventList;
