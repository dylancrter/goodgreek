import { Component } from "react";
import '../css/TopBar.css'

class TopBar extends Component {

    render() {
        return (
            <div className="TopBar">
              <h1>Good Greek</h1>
              <input type="text" class="SearchBar" placeholder="Search.."/>
              <div className="Hamburger">=</div>
            </div>
          );
    }
  }

  export default TopBar;