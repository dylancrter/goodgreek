import { useEffect } from "react";
import EventSumm from "../components/EventSumm";
import '../css/eventlist.css';
import EventsService from "../services/EventsService";

const events = [ {
  name: 'No Events Found', datetime: 'Never', organizer: "No One"
},

];

const EventList = () =>{

  useEffect(() => {

      EventsService.getAllEvents().then((response) => {
        events = Object.keys(response.data);
        console.log(response.data);
      })

  }, []);
  
  return (
      <div className="event-list">
        <title>Good Greek</title>
        <h1>Events</h1>
        {events.map(function(data) {
          return (
            <div>
              <EventSumm name={data.name} datetime={data.datetime} organizer={data.organizer}/>
            </div>
          )
        })}
      </div>
    );
  }

  export default EventList;