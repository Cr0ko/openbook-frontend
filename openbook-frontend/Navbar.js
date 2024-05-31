import React from 'react';
import { Navbar, Logo } from '../styles';

const NavbarComponent = ({ logo, bgColor }) => (
  <Navbar bgColor={bgColor}>
    <Logo src={logo} alt="Logo" />
    <h1>OpenBook</h1>
  </Navbar>
);

export default NavbarComponent;
