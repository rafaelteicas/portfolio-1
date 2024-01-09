'use client';
import {NavLinkProps} from '../../domain/navbar/navbar-types';
import {NavbarItemsLinks} from './styles/navbar.styles';

export default function NavbarItemLink({path, title}: NavLinkProps) {
  return (
    <NavbarItemsLinks href={path} key={title}>
      {title}
    </NavbarItemsLinks>
  );
}
