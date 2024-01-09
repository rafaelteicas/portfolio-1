import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 0.1em solid rgba(255, 255, 255, 0.2);
  margin-top: 50px;
  font-size: 12px;
  & b:hover {
    color: #4bbfb7;
    cursor: pointer;
  }
`;
