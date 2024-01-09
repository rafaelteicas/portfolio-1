'use client';
import {NavLinkProps} from './types';
import NavbarItemLink from './navbar-item-link';
import {useState} from 'react';
import Image from 'next/image';
import {
  NavbarLinksContainer,
  NavbarMenuIcon,
  NavbarMobileLinks,
} from './navbar';
import {navbarMapLinks} from './navbar-map-links';

export default function NavbarLinks() {
  const links = navbarMapLinks;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <NavbarLinksContainer>
        {links.map(({path, title}) => (
          <NavbarItemLink title={title} path={path} key={title} />
        ))}
      </NavbarLinksContainer>
      <NavbarMenuIcon
        src={open ? '/icons/close.svg' : '/icons/menu.svg'}
        width={20}
        height={20}
        alt="menu"
        onClick={() => setOpen(current => !current)}
      />
      {open && (
        <NavbarMobileLinks>
          {links.map(({path, title}) => (
            <NavbarItemLink title={title} path={path} key={title} />
          ))}
        </NavbarMobileLinks>
      )}
    </div>
  );
}
