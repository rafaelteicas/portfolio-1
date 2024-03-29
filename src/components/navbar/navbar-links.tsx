'use client';
import NavbarItemLink from './navbar-item-link';
import {useState} from 'react';
import {
  NavbarFlag,
  NavbarLinksContainer,
  NavbarMenuIcon,
  NavbarMobileLinks,
} from './styles/navbar.styles';
import {navbarMapLinks} from '../../domain/navbar/navbar-map-links';
import Image from 'next/image';

export default function NavbarLinks({lang}: {lang: string}) {
  const links = navbarMapLinks;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <NavbarLinksContainer>
        {links.map(({path, title, titleEn}) => (
          <NavbarItemLink
            title={lang === 'en' ? titleEn : title}
            path={path}
            key={path}
          />
        ))}
      </NavbarLinksContainer>
      <NavbarMenuIcon
        src={open ? '/icons/menu/close.svg' : '/icons/menu/menu.svg'}
        width={20}
        height={20}
        alt="menu"
        onClick={() => setOpen(current => !current)}
      />
      {open && (
        <NavbarMobileLinks>
          {links.map(({path, title}) => (
            <NavbarItemLink
              title={title}
              path={path}
              key={title}
              onClick={() => setOpen(false)}
            />
          ))}
        </NavbarMobileLinks>
      )}
    </div>
  );
}
