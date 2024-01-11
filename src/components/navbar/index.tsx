'use client';
import {NavbarContainer, NavbarItems, NavbarLogo} from './styles/navbar.styles';
import NavbarLinks from './navbar-links';
import {ParamsProps} from '@/domain/common/params-props';

export default function Navbar({params}: ParamsProps) {
  return (
    <header>
      <NavbarContainer>
        <NavbarItems>
          <NavbarLogo>Ainda não tem logo</NavbarLogo>
          <NavbarLinks lang={params.lang} />
        </NavbarItems>
      </NavbarContainer>
    </header>
  );
}
