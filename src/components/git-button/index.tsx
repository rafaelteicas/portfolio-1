import {ButtonContainer} from './styles/git-button.styles';

interface Props {
  title?: string;
  url: string;
  icon?: any;
}

export function Button({title, icon, url}: Props) {
  return (
    <ButtonContainer href={url} target="_blank">
      {icon}
    </ButtonContainer>
  );
}
