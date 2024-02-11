import React from "react";
import "../css/TopBar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from '../assets/favicon.png';

import "bootstrap/dist/css/bootstrap.min.css";

export default function TopBar() {
  return (
    <Navbar expand={false} style={{ backgroundColor: '#ba0c2f' }} className="TopBar">
      <Navbar.Brand href="/" className="brand">
        <img src={Logo} className="logo"></img>
        <h1 className="goodgreek">Good Greek</h1>
      </Navbar.Brand>
      <NavDropdown style={{ backgroundColor: '#ba0c2f' }} className="OrgDropdown" title="Greek Organizations" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#signup">Interfraternity Council</NavDropdown.Item>
            <NavDropdown.Item href="#signin">Multicultural Greek Council</NavDropdown.Item>
            <NavDropdown.Item href="#signin">National Pan-Hellenic Council</NavDropdown.Item>
            <NavDropdown.Item href="#signin">Panhellenic Association</NavDropdown.Item>
      </NavDropdown>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="menu">
          <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
          {true &&
          <p><Nav.Link href="signup" style={{ color: 'white' }}>Sign Up</Nav.Link>
          <Nav.Link href="signin" style={{ color: 'white' }}>Sign In</Nav.Link></p>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
