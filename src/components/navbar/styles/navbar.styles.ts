import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const Header = styled.header`
  display: flex;
  position: relative;
  width: 100%;
  height: 80px;
  position: fixed;
  align-items: center;
  border-bottom: 0.1em solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  z-index: 1;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0px 50px;
  @media (max-width: 1024px) {
    padding: 0px;
  }
  align-items: center;
`;

export const NavbarItems = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
`;

export const NavbarLogo = styled.div`
  color: var(--text);
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  gap: 5px;
  color: var(--text);
  @media (max-width: 768px) {
    display: none;
  }
  a:hover {
    background-color: var(--card);
  }
`;

export const NavbarMobileLinks = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  padding: 20px 0px;
  gap: 10px;
  color: var(--text);
  flex-direction: column;
  right: 0;
  justify-content: center;
  top: 80px;
  backdrop-filter: blur(10px);
  background-color: var(--card);
  -webkit-tap-highlight-color: transparent;
`;

export const NavbarItemsLinks = styled(Link)`
  min-width: 50px;
  padding: 10px;
  border-radius: 12px;
  font-weight: 500;
  text-align: center;
`;

export const NavbarMenuIcon = styled(Image)`
  display: none;
  -webkit-tap-highlight-color: transparent;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const NavbarFlag = styled(Image)`
  margin-left: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const NavbarDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 120px;
  border-radius: 12px;
  background-color: white;
  position: absolute;
  top: 80px;
  right: 80px;
  @media (max-width: 768px) {
    right: 20px;
  }
  -webkit-tap-highlight-color: transparent;
`;

export const NavbarDropdownFlagContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  margin-top: 10px;
  -webkit-tap-highlight-color: transparent;
  p {
    color: #000;
    font-size: 12px;
  }
  &:hover {
    background-color: #eee;
    border-radius: 20px;
  }
`;
