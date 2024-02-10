import axios from "axios";

const EVENT_BASE_API_URL = "localhost:3306/api/event";

class EventsService {
    getAllEvents(){
        return axios.get(EVENT_BASE_API_URL);
    }
}

export default new EventsService();