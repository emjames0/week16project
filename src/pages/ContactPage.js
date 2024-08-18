import React, { useState } from 'react';
//imports the needed components from React-Bootstrap
import { Container, Button, Form } from 'react-bootstrap';
//imports custom styling
import '../styles/ContactPage.css'; 

function ContactPage() {
// below is the useState hook to manage the form data
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

//handler to update form state as user types in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setForm({ ...form, [name]: value }); 
  };

//handler to manage form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form); 
//reesets the form fields after submission
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Container className="contact-container mt-5">
      {/* Greeting message */}
      <p classname="contact-message">Hi fam! Shoot us a message!</p>
      <h2>Contact Us</h2>

      {/* Form for collecting user contact information */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={form.name}
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={form.email}
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={form.phone}
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
            value={form.message}
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

//exports the ContactPage component as the default
export default ContactPage; 