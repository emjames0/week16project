import React from 'react';
//imports the GameItem component to create the GameList 
import GameItem from './GameItem';

//below renders a list of GameItem components, representing one game at a time with its own functionality
function GameList({ games, onEditGame, onDeleteGame }) {
  return (
    <div>
      {games.map(game => (
        <GameItem
          key={game.id}
          game={game}
          onEdit={() => onEditGame(game)}
          onDelete={() => onDeleteGame(game)}
        />
      ))}
    </div>
  );
}

//below exports the GameList as the default 
export default GameList;