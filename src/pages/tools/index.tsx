import Text from '@/components/text';
import {ToolsContainer, ToolsBox, ToolsImage} from './styles/tools.styles';
import Image from 'next/image';

export function Tools() {
  return (
    <ToolsContainer>
      <Text title>O que eu utilizo</Text>
      <ToolsBox>
        <ToolsImage
          src="/icons/apple.svg"
          alt="Apple Icon"
          width={50}
          height={50}
        />
        <ToolsImage
          src="/icons/vscode.png"
          alt="Apple Icon"
          width={50}
          height={50}
        />
        <ToolsImage
          src="/icons/android.svg"
          alt="Apple Icon"
          width={50}
          height={50}
        />
        <ToolsImage
          src="/icons/ie.png"
          alt="Apple Icon"
          width={50}
          height={50}
        />
      </ToolsBox>
    </ToolsContainer>
  );
}
