import axios from 'axios'

const EVENT_API_BASE_URL = 'http://localhost:8080/api/v1/events';

class EventService {

    getAllEvents(){
        return axios.get(EVENT_API_BASE_URL);
    }
}

export default new EventService();