import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
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
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="menu">
          <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
          {true &&
          <NavDropdown title="Menu" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="signup">Sign Up</NavDropdown.Item>
            <NavDropdown.Item href="signin">Sign In</NavDropdown.Item>
          </NavDropdown>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
