import {ButtonContainer} from './styles/button.styles';
import styles from './button.module.css';

interface Props {
  title: string;
  url: string;
  icon?: any;
}

export function Button({title, icon, url}: Props) {
  return (
    <ButtonContainer href={url} target="_blank">
      {icon}
      <b>{title}</b>
    </ButtonContainer>
  );
}
