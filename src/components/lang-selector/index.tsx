import Link from 'next/link';
import {
  DropdownContainer,
  DropdownFlagContainer,
  Flag,
} from './styles/lang-selector.styles';
import {useState} from 'react';
import {ParamsProps} from '@/domain/common/params-props';

interface Props {
  visible: boolean;
}

const mapFlags = [
  {
    src: '/icons/flags/br.png',
    title: 'Portuguese',
    lang: 'pt',
  },
  {
    src: '/icons/flags/eua.png',
    title: 'English',
    lang: 'en',
  },
];

export function LangSelector({params}: ParamsProps) {
  const [visible, setVisible] = useState(false);
  const icon = params?.lang === 'en' ? 'eua.png' : 'br.png';
  function handleOnClick() {
    setVisible(current => !current);
  }
  return (
    <>
      <Flag
        src={`/icons/flags/${icon}`}
        width={24}
        height={24}
        alt="flag"
        onClick={handleOnClick}
      />
      <LangSelectorDropdown visible={visible} />
    </>
  );
}

function LangSelectorDropdown({visible}: Props) {
  if (!visible) return null;

  return (
    <DropdownContainer>
      {mapFlags.map(flag => (
        <Link href={flag.lang} key={flag.title}>
          <DropdownFlagContainer>
            <Flag src={flag.src} width={24} height={24} alt="flag" />
            <p>{flag.title}</p>
          </DropdownFlagContainer>
        </Link>
      ))}
    </DropdownContainer>
  );
}
