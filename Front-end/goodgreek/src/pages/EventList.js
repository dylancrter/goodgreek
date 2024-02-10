import { useEffect } from "react";
import EventSumm from "../components/EventSumm";
import '../css/eventlist.css';
import EventsService from "../services/EventsService";

const events = [ {
  name: 'Feed the Hungry', datetime: 'Tomorrow', organizer: "Alpha Sig"
},
{
  name: 'Feed the Starved', datetime: 'Next Year', organizer: "Alpha Sig"
},
{
  name: 'Feed the Dead', datetime: 'Next Milenium', organizer: "Alpha Sig 5000"
},
{
  name: 'Feed the Hungry', datetime: 'Tomorrow', organizer: "Alpha Sig"
},
{
  name: 'Feed the Starved', datetime: 'Next Year', organizer: "Alpha Sig"
},
{
  name: 'Feed the Dead', datetime: 'Next Milenium', organizer: "Alpha Sig 5000"
},
{
  name: 'Feed the Hungry', datetime: 'Tomorrow', organizer: "Alpha Sig"
},
{
  name: 'Feed the Starved', datetime: 'Next Year', organizer: "Alpha Sig"
},
{
  name: 'Feed the Dead', datetime: 'Next Milenium', organizer: "Alpha Sig 5000"
},

];


async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  console.log(movies);
}

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