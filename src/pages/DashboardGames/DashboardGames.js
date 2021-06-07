import React from 'react';
import '@styles/page.scss';
import { GamesGrid } from './components/GamesGrid/GamesGrid';

export const DashboardGames = () => {
  return (
    <div className='page'>
      <h1>Mis Juegos</h1>
      <hr />
      <GamesGrid />
    </div>
  );
};
