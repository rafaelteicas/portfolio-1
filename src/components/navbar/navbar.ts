import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const NavbarContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border-bottom: 0.1em solid rgba(255, 255, 255, 0.2);
  z-index: 1;
`;

export const NavbarItems = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
`;

export const NavbarLogo = styled.div``;

export const NavbarLinksContainer = styled.div`
  display: flex;
  gap: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarMobileLinks = styled.div`
  top: 0;
  position: absolute;
  display: flex;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  flex-direction: column;
  right: 0;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 10px;
  overflow: hidden;
  z-index: -1;
`;

export const NavbarItemsLinks = styled(Link)`
  min-width: 100px;
  padding: 10px;
  border-radius: 20px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarMenuIcon = styled(Image)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;
