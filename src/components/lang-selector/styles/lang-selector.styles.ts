import styled from 'styled-components';
import Image from 'next/image';

export const DropdownContainer = styled.div`
  position: absolute;
  z-index: 99;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 120px;
  border-radius: 12px;
  background-color: white;
  right: 80px;
  @media (max-width: 768px) {
    right: 20px;
  }
  -webkit-tap-highlight-color: transparent;
  -webkit-text-fill-color: black;
  font-weight: 500;
  left: 0;
`;

export const DropdownFlagContainer = styled.div`
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

export const Flag = styled(Image)`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
