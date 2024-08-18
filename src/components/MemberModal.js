import React, { useState, useEffect } from 'react';
//imports the needed components from React-Bootstrap
import { Modal, Button, Form } from 'react-bootstrap';

//the function for the MemberModal to pass in props for functionality
function MemberModal({ show, onHide, member, onSave }) {
//state to manage form inputs for member details
  const [form, setForm] = useState({
    photo: '',
    name: '',
    number: '',
    height: '',
    position: '',
    goals: ''
  });

//effect to update form state when a member prop is provided or reset the form
  useEffect(() => {
    if (member) {
      setForm(member);
    } else {
      setForm({
        photo: '',
        name: '',
        number: '',
        height: '',
        position: '',
        goals: ''
      });
    }
  }, [member]);

//handles changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

//handles form submission and call onSave function with form data
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{member ? 'Edit Member' : 'Add Member'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter photo URL"
              name="photo"
              value={form.photo}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter number"
              name="number"
              value={form.number}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formHeight">
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter height"
              name="height"
              value={form.height}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter position"
              name="position"
              value={form.position}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGoals">
            <Form.Label>Goals</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number of goals"
              name="goals"
              value={form.goals}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {member ? 'Save Changes' : 'Add Member'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

//exports the MemberModal as the default
export default MemberModal;