import { Component } from "react";

class TopBar extends Component {
    render() {
        return (
            <div className="TopBar">
              <h1>Good Greek</h1>
              <div className="SearchBar">Search:</div>
              <div className="Hamburger">=</div>
            </div>
          );
    }
  }

  export default TopBar;