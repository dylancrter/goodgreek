//import logo from '../assets/logo.svg';
import '../css/App.css';
import TopBar from './TopBar';
import EventList from './EventList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Good Greek</title>
      </header>
      <TopBar/>
      <EventList/>
    </div>
  );
}

export default App;
