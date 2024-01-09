import styled from 'styled-components';

export const SkillsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: var(--primary);
  border-radius: 10px;
  &:hover {
    color: #4bbfb7;
    cursor: pointer;
  }
  & b {
    text-transform: uppercase;
    font-size: 12px;
  }
`;
