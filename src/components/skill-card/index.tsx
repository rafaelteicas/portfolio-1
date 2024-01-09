import {SkillsCardContainer} from './styles/skill-card.styles';

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
