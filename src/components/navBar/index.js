import React from 'react';
import {Navbar} from 'react-bootstrap';
import './navBar.scss';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className=".bg-dark">
      <Navbar.Brand>Weather Forecast</Navbar.Brand>
    </Navbar>
  );
};
