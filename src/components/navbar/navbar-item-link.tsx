'use client';
import {Url} from 'next/dist/shared/lib/router/router';
import {NavLinkProps} from '../../domain/navbar/navbar-types';
import {NavbarItemsLinks} from './styles/navbar.styles';

export default function NavbarItemLink({
  path,
  title,
  onClick,
}: Partial<NavLinkProps> & {onClick?: () => void}) {
  return (
    <NavbarItemsLinks href={path as Url} key={title} onClick={onClick}>
      {title}
    </NavbarItemsLinks>
  );
}
