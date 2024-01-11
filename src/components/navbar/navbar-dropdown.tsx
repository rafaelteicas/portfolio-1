import Link from 'next/link';
import {
  NavbarDropdownContainer,
  NavbarDropdownFlagContainer,
  NavbarFlag,
} from './styles/navbar.styles';

interface Props {
  visible: boolean;
}

const mapFlags = [
  {
    src: '/icons/br.png',
    title: 'Portuguese',
    lang: 'pt',
  },
  {
    src: '/icons/eua.png',
    title: 'English',
    lang: 'en',
  },
];

export default function NavbarDropdown({visible}: Props) {
  if (!visible) return null;

  return (
    <NavbarDropdownContainer>
      {mapFlags.map(flag => (
        <Link href={flag.lang} key={flag.title}>
          <NavbarDropdownFlagContainer>
            <NavbarFlag src={flag.src} width={24} height={24} alt="flag" />
            <p>{flag.title}</p>
          </NavbarDropdownFlagContainer>
        </Link>
      ))}
    </NavbarDropdownContainer>
  );
}
