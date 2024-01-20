import {SkillsCard} from '@/components/skill-card';
import {SkillsCardContainer, SkillsContainer} from './styles/skills.styles';
import Text from '@/components/text';
import {Card} from '@/components/card';

export default function Skills() {
  return (
    <SkillsContainer>
      <Text title>Stacks</Text>
      <SkillsCardContainer>
        <SkillsCard title="Typescript / Javascript" />
        <SkillsCard title="React Native" />
        <SkillsCard title="Node.js" />
        <SkillsCard title="React / Next.js" />
        <SkillsCard title="Firebase" />
        <SkillsCard title="Docker" />
        <SkillsCard title="MySQL" />
        <SkillsCard title="PostegreSQL" />
        <SkillsCard title="Kotlin" />
        <SkillsCard title="Java" />
      </SkillsCardContainer>
    </SkillsContainer>
  );
}
