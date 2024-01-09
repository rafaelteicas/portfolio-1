import {useRouter} from 'next/navigation';
import {ButtonContainer} from './styles/button.styles';
import styles from './button.module.css';

interface Props {
  title: string;
  url: string;
  icon?: any;
}

export function Button({title, icon, url}: Props) {
  const router = useRouter();
  return (
    <ButtonContainer onClick={() => router.push(url)}>
      {icon}
      <b>{title}</b>
    </ButtonContainer>
  );
}
