import React from 'react';
//imports needed components from React-Bootstrap
import { Modal, Button } from 'react-bootstrap';

//below displays a confirmation modal for delete the item to help prevent accidental deletions
function ConfirmDelete({ show, onHide, onConfirm, itemName }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this {itemName}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDelete;