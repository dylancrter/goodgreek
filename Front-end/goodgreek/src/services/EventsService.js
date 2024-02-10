import axios from "axios";

const EVENT_BASE_API_URL = "http://localhost:3306/api/event";

class EventsService {
    getAllEvents() {
        return axios.get(EVENT_BASE_API_URL);
    }

    getEventById(eventId) {
        return axios.get(EVENT_BASE_API_URL + '/' + eventId);
    }
}

export default new EventsService();