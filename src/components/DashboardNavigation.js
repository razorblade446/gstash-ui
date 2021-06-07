import React from 'react';
import { NavLink } from 'react-router-dom';
import { AdminNavigation } from './AdminNavigation';

export const DashboardNavigation = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark container-fluid'>
      <NavLink className='navbar-brand' to='#'>
        <img src='/brand.svg' height='30' alt='' />
      </NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <div className='navbar-nav'>
          <NavLink
            exact
            activeClassName='active'
            className='nav-item nav-link'
            to='/'
          >
            Resumen
          </NavLink>
          <NavLink
            exact
            activeClassName='active'
            className='nav-item nav-link'
            to='/games'
          >
            Mis Juegos
          </NavLink>
          <NavLink
            exact
            activeClassName='active'
            className='nav-item nav-link'
            to='/platforms'
          >
            Mis Plataformas
          </NavLink>
        </div>
      </div>
      <div className='collapse navbar-collapse' id='navbarNavRight'>
        <div className='navbar-nav ml-auto'>
          <AdminNavigation />
        </div>
      </div>
    </nav>
  );
};
