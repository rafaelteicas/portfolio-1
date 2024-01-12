import {
  ToolsContainer,
  SetupContainer,
  ToolsImage,
  ToolsBox,
} from './styles/setup.styles';
import {ParamsProps} from '@/domain/common/params-props';

export default function Tools({params}: ParamsProps) {
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
