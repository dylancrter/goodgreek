import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Logo from '../assets/favicon.png';
import "../css/TopBar.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function TopBar() {
  return (
    <Navbar expand={false} style={{ backgroundColor: '#ba0c2f' }} className="TopBar">
      <Navbar.Brand href="/" className="brand">
        <img src={Logo} className="logo"></img>
        <h1 className="goodgreek">GoodGreek</h1>
      </Navbar.Brand>
      <div style={{justifyContent:'center', marginLeft:'65%'}}>
      <label style={{marginRight:'0.5vw'}}>Search:</label>
      <input type="text" onChange={e => setQuery(e.target.value)} />
      </div>
      <div className="ml-auto">
        <Navbar.Toggle style={{color:"white", borderWidth:"0.25vw"}} aria-controls="responsive-navbar-nav" />
      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{marginLeft:'95.5%'}} className="menu">
          <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
          {true &&
          <p><Nav.Link href="signup" style={{ color: 'white', verticalAlign:'right' }}>Sign Up</Nav.Link>
          <Nav.Link href="signin" style={{ color: 'white' }}>Sign In</Nav.Link></p>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
