import Text from '@/components/text';
import {
  ToolsContainer,
  SetupContainer,
  ToolsImage,
  ToolsBox,
} from './styles/setup.styles';
import {getLanguageServer} from '@/infra/translate/translate-server';
import {ParamsProps} from '@/domain/common/params-props';

export function Tools({params}: ParamsProps) {
  const {translate} = getLanguageServer(params.lang);

  return (
    <ToolsContainer id="setup">
      <SetupContainer>
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
      </SetupContainer>
    </ToolsContainer>
  );
}
