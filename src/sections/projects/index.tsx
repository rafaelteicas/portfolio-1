import Text from '@/components/text';
import {
  ProjectsCardsContainer,
  ProjectsContainer,
} from './styles/projects.styles';
import ProjectsCard from './components/ProjectsCard';
import {useRouter} from 'next/navigation';
import {projectMockEn} from '@/domain/projects/projects-mock-en';
import {projectMock} from '@/domain/projects/projects-mock';
import {ParamsProps} from '@/domain/common/params-props';

export default function Projects({params}: ParamsProps) {
  const route = useRouter();
  const items = params.lang === 'en' ? projectMockEn : projectMock;
  return (
    <ProjectsContainer>
      <Text title>Projetos</Text>
      <ProjectsCardsContainer>
        {items.map(item => (
          <ProjectsCard
            onClick={() => route.push(item.url)}
            item={item}
            key={item.title}
          />
        ))}
      </ProjectsCardsContainer>
    </ProjectsContainer>
  );
}
