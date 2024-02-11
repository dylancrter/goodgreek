import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddEventButton from '../components/AddEventButton';
import EventSumm from "../components/EventSumm";
import '../css/eventlist.css';
import EventsService from "../services/EventsService";


// Component to render a list of events
const EventList = () => {
  // State hook to store the list of events
  const [events, setEvents] = useState([]);

  // useEffect hook to fetch all events on component mount
  useEffect(() => {
    EventsService.getAllEvents().then((response) => {
      setEvents(response.data); // Update the events state with the fetched data
    });

  }, []);

  // Render the component
  return (
    <div className="event-list">
      {!sessionStorage.isLoggedIn && (
        <meta http-equiv="Refresh" content="0; url='/signin'" />
      )}

      <title>GoodGreek</title>
      <h1>Philanthropic Events</h1>
      {events.map((event, index) => (
        <Link to={"/event?id=" + event.id} style={{ textDecoration: 'none', color: "inherit" }}>
          <EventSumm image={event.id % 4} key={index} name={event.eventName} datetime={event.date} location={event.location} organizer={event.organization}/>
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
