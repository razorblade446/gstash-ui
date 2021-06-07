import React from 'react';
import { GameItem } from '../GameItem/GameItem';
import './gamesGrid.scss';

export const GamesGrid = () => {
  const games = [
    {
      id: 1,
      name: 'Super Smash Bros',
      upc: '045496592998',
      platform: {
        id: 1,
        name: 'Nintendo Switch',
      },
    },
    {
      id: 2,
      name: 'The Legend of Zelda Breath of the Wild',
      upc: '045496590420',
      platform: {
        id: 1,
        name: 'Nintendo Switch',
      },
    },
    {
      id: 3,
      name: 'Gears 5',
      upc: '889842519099',
      platform: {
        id: 2,
        name: 'Xbox One',
      },
    },
  ];

  return (
    <div className='row games-grid'>
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};
