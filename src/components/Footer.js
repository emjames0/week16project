import React from 'react';
//imports needed components from React-Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
//imports custom styling
import '../styles/Footer.css'; 

//below is the footer of the application
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Yakima Valley College Women's Soccer. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;