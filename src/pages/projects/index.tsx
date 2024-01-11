'use client';
import {projectMock} from '../../domain/projects/projects-mock';
import ProjectComponent from './components/project-component';
import Text from '@/components/text';
import {ProjectsContainer} from './styles/projects.styles';
import {getLanguageServer} from '@/infra/translate/translate-server';
import {projectMockEn} from '@/domain/projects/projects-mock-en';
import {ParamsProps} from '@/domain/common/params-props';

export default function Projects({params}: ParamsProps) {
  const {translate} = getLanguageServer(params.lang);

  const items = params.lang === 'en' ? projectMockEn : projectMock;
  return (
    <ProjectsContainer id="projects">
      <Text title>{translate.projects.title}</Text>
      {items.map(item => (
        <ProjectComponent {...item} key={item.title} />
      ))}
    </ProjectsContainer>
  );
}
