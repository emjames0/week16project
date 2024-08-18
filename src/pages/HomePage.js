import React from 'react';
//imports the needed components from React-Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';
//imports custom styling
import '../styles/HomePage.css';
//imports the main page photo
import teamPhoto from '../assets/gameplay1.png';

function HomePage() {
  return (
    <Container className="mt-5">
      <Row className="mt-4">
        <Col>
          <div className="upcoming-matches-section">
            <h2>Upcoming Matches</h2>
            <p>
              Stay tuned for updates on our upcoming matches and events. We look forward to seeing you at the games!
            </p>
          </div>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h1>Welcome to Yakima Valley College Women's Soccer</h1>
          <p>Your source for all things YVC Women's Soccer!</p>
          <Button variant="primary" href="/team">Meet the Team</Button>
          <div className="team-photo-container mt-4">
            <img src={teamPhoto} alt="YVC Women's Soccer Team" className="team-photo" />
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>About Us</h2>
          <p>
            The Yakima Valley College Women’s Soccer team is committed to excellence both on and off the field. Our program emphasizes teamwork, sportsmanship, and skill development.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;