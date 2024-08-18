import React, { useState, useEffect } from 'react';
//imports the needed components from React-Bootstrap
import { Container, Button } from 'react-bootstrap'; 
//imports the GameModal and ConfirmDelete components
import GameModal from '../components/GameModal'; 
import ConfirmDelete from '../components/ConfirmDelete'; 
//imports the needed functions for the API
import { fetchGames, addGame, updateGame, deleteGame } from '../apiService'; 
//imports custom styling
import '../styles/GameSchedule.css'; 

function GameSchedule() {
// below are state hooks to manage the games, modal visibility, selected game, and the new game details
  const [games, setGames] = useState([]);
  const [showGameModal, setShowGameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [newGame, setNewGame] = useState({ date: '', opponent: '', location: '', time: '' });

// useEffect to fetch all games when the component mounts
  useEffect(() => {
    fetchAllGames(); 
  }, []); 

// the function to fetch games from the API and update the state
  const fetchAllGames = async () => {
    try {
      const response = await fetchGames();
      setGames(response.data); 
    } catch (error) {
      console.error('Error fetching games:', error); 
    }
  };

//handler to open the modal for adding a new game
  const handleAddGame = () => {
    setNewGame({ date: '', opponent: '', location: '', time: '' }); 
    setSelectedGame(null); 
    setShowGameModal(true); 
  };

//handler to save a new or edited game
  const handleSaveGame = async () => {
    try {
      if (selectedGame) {
// ff editing an existing game
        await updateGame(selectedGame.id, newGame);
        setGames(games.map(g => g.id === selectedGame.id ? { ...g, ...newGame } : g));
      } else {
//if adding a new game
        const addedGame = await addGame(newGame);
        setGames([...games, addedGame.data]); //append the new game 
      }
      setNewGame({ date: '', opponent: '', location: '', time: '' }); 
      setShowGameModal(false);
    } catch (error) {
//below was added to log any errors because this was really hard 
      console.error('Error saving game:', error);
    }
  };

//below is the handler to update the new game state as user types in the modal form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGame(prevGame => ({
      ...prevGame,
      [name]: value 
    }));
  };

//handler to open the modal for editing a selected game
  const handleEditGame = (game) => {
    setSelectedGame(game); 
    setNewGame(game); 
    setShowGameModal(true);
  };

//handler to open the confirmation modal for deleting a selected game
  const handleDeleteGame = (game) => {
    setSelectedGame(game); 
    setShowDeleteModal(true); 
  };

//handler to confirm and delete the selected game
  const handleConfirmDelete = async () => {
    try {
      await deleteGame(selectedGame.id); 
      setGames(games.filter(g => g.id !== selectedGame.id)); 
      setShowDeleteModal(false); 
    } catch (error) {
      console.error('Error deleting game:', error); 
    }
  };

  return (
    <Container className="mt-5">
      <div className="game-schedule-container">
        <h2>Game Schedule</h2>
        {/* Button to open the modal for adding a new game */}
        <Button variant="primary" onClick={handleAddGame}>Add Game</Button>

        {/* Mapping through the games to display each one with edit and delete options */}
        {games.map(game => (
          <div key={game.id} className="game-card">
            <div className="game-details">
              {/* Displaying the game details like date, opponent, location, and time */}
              <div className="game-date">{new Date(game.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
              <div className="game-detail">{game.opponent}</div>
              <div className="game-detail">{game.location}</div>
              <div className="game-detail">{game.time}</div>
            </div>
            <div className="game-actions">
              {/* Buttons to edit or delete the game */}
              <Button variant="warning" onClick={() => handleEditGame(game)}>Edit</Button>
              <Button variant="danger" onClick={() => handleDeleteGame(game)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding or editing a game */}
      <GameModal
        show={showGameModal}
        onHide={() => setShowGameModal(false)}
        game={selectedGame}
        onSave={handleSaveGame}
        onChange={handleChange}
        newGame={newGame}
      />

      {/* Modal for confirming the deletion of a game */}
      <ConfirmDelete
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        itemName="game"
      />
    </Container>
  );
}

//below exports the GameSchedule as the default 
export default GameSchedule; 