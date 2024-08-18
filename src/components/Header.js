import React from 'react';
//imports necessary components from React-Bootstrap for layout and styling
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//imports custom CSS for the Header component
import '../styles/Header.css';

//imports the YVC Women's Soccer logo image
import logo from '../assets/Head-Color-3.png';

//this component renders the navigation bar for the YVC Women's Soccer website, including links to different pages and a centered logo.
function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="px-3">
      {/*brand section with logo and title */}
      <Navbar.Brand as={Link} to="/" className="mx-auto navbar-brand-centered">
        <img
          src={logo}
          alt="YVC Women's Soccer"
          style={{ height: '50px', width: 'auto' }}
          className="mr-2"
        />
        YVC Women's Soccer
      </Navbar.Brand>
      {/* Navbar toggle for responsive behavior on smaller screens */}
      <Navbar.Toggle aria-controls="navbar-nav" />
      {/* Collapsible navigation links aligned to the right on larger screens */}
      <Navbar.Collapse id="navbar-nav" className="justify-content-lg-end">
        <Nav className="ml-auto text-center">
          <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
          <Nav.Link as={Link} to="/team" className="mx-2">Team</Nav.Link>
          <Nav.Link as={Link} to="/schedules" className="mx-2">Schedule</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

//exports the Header as the default
export default Header;