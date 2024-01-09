'use client';
import {NavLinkProps} from './types';
import {NavbarItemsLinks} from './navbar';

export default function NavbarItemLink({path, title}: NavLinkProps) {
  return (
    <NavbarItemsLinks href={path} key={title}>
      {title}
    </NavbarItemsLinks>
  );
}
