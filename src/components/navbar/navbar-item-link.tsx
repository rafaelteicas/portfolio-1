'use client';
import {Url} from 'next/dist/shared/lib/router/router';
import {NavLinkProps} from '../../domain/navbar/navbar-types';
import {NavbarItemsLinks} from './styles/navbar.styles';

export default function NavbarItemLink({path, title}: Partial<NavLinkProps>) {
  return (
    <NavbarItemsLinks href={path as Url} key={title}>
      {title}
    </NavbarItemsLinks>
  );
}
