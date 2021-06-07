import React from 'react';
import './gameItem.scss';

export const GameItem = ({ game }) => {
  return (
    <div className='col-6 col-sm-3 col-lg-2 game-item'>
      <div className='item shadow-sm'>
        <div className='poster'>
          <div className='poster_platform'></div>
          <div className='poster_image'></div>
        </div>
        <div className='content'>
          <div className='title'>{game.name}</div>
        </div>
      </div>
    </div>
  );
};
