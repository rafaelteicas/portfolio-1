'use client';
import {projectMock} from './projects-mock';
import ProjectComponent from './components/project-component';
import Text from '@/components/text';
import {ProjectsContainer} from './projects';
export default function Projects() {
  const items = projectMock;
  return (
    <ProjectsContainer id="projects">
      <Text title>PRINCIPAIS PROJETOS</Text>
      {items.map(item => (
        <ProjectComponent {...item} key={item.title} />
      ))}
    </ProjectsContainer>
  );
}
