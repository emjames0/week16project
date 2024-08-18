import React from 'react';
//imports the needed components from React-Bootstrap
import { Card, Button } from 'react-bootstrap';

//the below component represents a single game item in the card format and passes the props needed for manipulation 
function GameItem({ game, onEdit, onDelete }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{game.date}</Card.Title>
        <Card.Text>
          <strong>Opponent:</strong> {game.opponent}<br />
          <strong>Location:</strong> {game.location}<br />
          <strong>Time:</strong> {game.time}
        </Card.Text>
        <Button variant="warning" onClick={onEdit}>Edit</Button>
        <Button variant="danger" className="ml-2" onClick={onDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

//below exports the GameItem as the default 
export default GameItem;