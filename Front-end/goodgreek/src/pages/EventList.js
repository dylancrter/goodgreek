import { useEffect } from "react";
import EventSumm from "../components/EventSumm";
import '../css/eventlist.css';
import EventsService from "../services/EventsService";

const eventinfo = [ {
  name: 'No Events Found', datetime: 'Never', organizer: "No One"
}];

const eventslist = () => {
  EventsService.getAllEvents().then((response) => {
    var events = Object.keys(response.data);
    console.log(response.data);
    events.map(function(data) {
    return (
      <div>
        <EventSumm name={data.name} datetime={data.datetime} organizer={data.organizer}/>
      </div>
    )
  })
})};

const EventList = () =>{
  
  return (
      <div className="event-list">
        <title>Good Greek</title>
        <h1>Events</h1>
        {eventslist}
      </div>
    );
  }

  export default EventList;