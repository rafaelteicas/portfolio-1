import Image from 'next/image';
import {ButtonContainer} from './styles/git-button.styles';

interface Props {
  title?: string;
  url: string;
}

const ICON_SIZE = 20;

export function Button({title, url}: Props) {
  return (
    <ButtonContainer href={url} target="_blank">
      <Image
        src="/icons/social-media/github.svg"
        width={ICON_SIZE}
        height={ICON_SIZE}
        alt="git"
      />
    </ButtonContainer>
  );
}
