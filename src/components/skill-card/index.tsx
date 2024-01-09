import {SkillsCardContainer} from './skill-card';

interface Props {
  title: string;
}

export function SkillsCard({title}: Props) {
  return (
    <SkillsCardContainer>
      <b>{title}</b>
    </SkillsCardContainer>
  );
}
