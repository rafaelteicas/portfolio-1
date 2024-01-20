import {ToolsBox, ToolsContainer} from './styles/setup.styles';
import Text from '@/components/text';
import Image from 'next/image';

const items = [
  '/icons/tools/vscode.png',
  '/icons/tools/intellij.png',
  '/icons/tools/androidstudio.png',
];

export default function Setup() {
  return (
    <ToolsContainer id="setup">
      <Text title>Tools</Text>
      <div style={{display: 'flex', flexDirection: 'row', gap: 20}}>
        {items.map(item => (
          <ToolsBox key={item}>
            <Image src={item} width={50} height={50} alt={item} />
          </ToolsBox>
        ))}
      </div>
    </ToolsContainer>
  );
}
