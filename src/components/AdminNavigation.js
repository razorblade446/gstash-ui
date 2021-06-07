import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const AdminNavigation = () => {
  return (
    <NavDropdown title='Administración' id='adminDropdown'>
      <NavDropdown.Item href='/auth/login'>Login</NavDropdown.Item>
    </NavDropdown>
  );
};
