import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  background-color: var(--card);
  border-radius: 12px;
  border: var(--cardLine);
  padding: 20px;
  width: 90%;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
