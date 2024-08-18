import React from 'react';
//imports links from the react-router-dom
import { Link } from 'react-router-dom';
//imports the Nav components from React-Bootstrap
import { Navbar, Nav } from 'react-bootstrap';

//below is the component for the Navbar to link internally to each page
function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">YVC Women's Soccer</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/team">Team</Nav.Link>
        <Nav.Link as={Link} to="/schedules">Game Schedule</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

//below exports Navigation as the default 
export default Navigation;