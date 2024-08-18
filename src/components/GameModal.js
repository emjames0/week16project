import React from 'react';
//imports the needed components from React-Bootstrap
import { Modal, Form, Button } from 'react-bootstrap';

//below is the GameModal, which is the pop-up box when you are putting in a new game. 
//it takes in the props needed to hold functionality over the modal. 
function GameModal({ show, onHide, game, onSave, onChange, newGame }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{game ? 'Edit Game' : 'Add Game'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={newGame.date}
              onChange={onChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formOpponent">
            <Form.Label>Opponent</Form.Label>
            <Form.Control
              type="text"
              name="opponent"
              value={newGame.opponent}
              onChange={onChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={newGame.location}
              onChange={onChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="text"
              name="time"
              value={newGame.time}
              onChange={onChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={onSave}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

//exports thte GameModal as the default 
export default GameModal;