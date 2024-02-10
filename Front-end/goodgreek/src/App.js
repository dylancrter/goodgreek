import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./css/App.css";
import TopBar from "./components/TopBar";
import EventList from "./pages/EventList";
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Event from './pages/Event'

export default function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EventList />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="event" element={<Event/>} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="layout">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <EventList />
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}