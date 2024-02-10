import React from "react";
import "../css/TopBar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from '../assets/favicon.png';

import "bootstrap/dist/css/bootstrap.min.css";

export default function TopBar() {
  return (
    <Navbar expand={false} bg="dark" variant="dark" className="TopBar">
      <Navbar.Brand href="/" className="brand">
        <img src={Logo} className="logo"></img>
        <h1 className="goodgreek">Good Greek</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="signup">Sign Up</Nav.Link>
          <Nav.Link href="signin">Sign In</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#signup">Test1</NavDropdown.Item>
            <NavDropdown.Item href="#signin">Test2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
