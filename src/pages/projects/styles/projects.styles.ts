import Image from 'next/image';
import {Carousel} from 'react-responsive-carousel';
import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 24px;
  margin-bottom: 50px;
`;

export const ProjectsBox = styled.div`
  display: flex;
  flex: 1;
  padding: 30px;
  background-color: var(--card);
  border-radius: 20px;
  gap: 50px;
  align-items: center;
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;

export const ProjectsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 30px;
`;

export const ProjectsSkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SmartphoneContainer = styled(Image)`
  position: relative;
  width: calc(1290px / 6);
  height: calc(2796px / 6);
  border-radius: 20px;
`;

export const CarouselContainer = styled(Carousel)`
  width: 100%;
  max-width: calc(1290px / 6);
  margin: 0 auto;
  .control-dots {
    position: relative;
    z-index: 1;
  }
  .carousel-status {
    display: none;
  }
  .carousel.carousel-slider .control-arrow {
    position: absolute;
    bottom: auto;
  }
`;
