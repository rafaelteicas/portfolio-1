'use client';
import {NavbarContainer, NavbarItems, NavbarLogo} from './navbar';
import NavbarLinks from './navbar-links';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <header>
      <NavbarContainer>
        <NavbarItems>
          <NavbarLogo>Ainda não tem logo</NavbarLogo>
          <NavbarLinks />
        </NavbarItems>
      </NavbarContainer>
    </header>
  );
}
