import Image from 'next/image';
import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 50px;
  padding: 20px 50px;
  background-color: #00000040;
  color: var(--text);
  @media (max-width: 1280px) {
    padding: 20px 0px;
  }
`;

export const ProjectsBox = styled.div`
  border: 0.1em solid #0d2732;
  width: 80%;
  flex: 1;
  padding: 30px;
  border-radius: 12px;
  gap: 50px;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 30px;
  color: var(--text);
`;

export const ProjectsSkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ImageContainer = styled(Image)`
  position: relative;
  height: calc(2796px / 6);
  border-radius: 12px;
  max-width: calc(1290px / 6);
`;
