import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--contentGap);
`;

export const ProjectsImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  width: 30%;
`;

export const ProjectsCardsContainer = styled.div`
  display: flex;
  width: 90%;
  gap: 20px;
  flex-wrap: wrap;
`;
