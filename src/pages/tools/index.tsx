import Text from '@/components/text';
import {ToolsContainer, ToolsBox, ToolsImage} from './styles/tools.styles';
import {getLanguageServer} from '@/infra/translate/translate-server';
import {ParamsProps} from '@/domain/common/params-props';

export function Tools({params}: ParamsProps) {
  const {translate} = getLanguageServer(params.lang);

  return (
    <ToolsContainer>
      <Text title>{translate.tools.title}</Text>
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
