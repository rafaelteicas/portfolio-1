'use client';
import {
  Header,
  NavbarContainer,
  NavbarFlag,
  NavbarItems,
  NavbarLogo,
} from './styles/navbar.styles';
import NavbarLinks from './navbar-links';
import {ParamsProps} from '@/domain/common/params-props';
import NavbarDropdown from './navbar-dropdown';
import {useState} from 'react';

export default function Navbar({params}: ParamsProps) {
  const [visible, setVisible] = useState(false);
  const icon = params.lang === 'en' ? 'eua.png' : 'br.png';
  function handleOnClick() {
    setVisible(current => !current);
  }
  return (
    <Header>
      <NavbarContainer>
        <NavbarItems>
          <NavbarLogo>RAFAEL</NavbarLogo>
          <NavbarLinks lang={params.lang} />
        </NavbarItems>
        <NavbarFlag
          src={`/icons/flags/${icon}`}
          width={24}
          height={24}
          alt="flag"
          onClick={handleOnClick}
        />
        <NavbarDropdown visible={visible} />
      </NavbarContainer>
    </Header>
  );
}
