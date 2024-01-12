import {ToolsContainer, SetupContainer, ToolsBox} from './styles/setup.styles';
import {ParamsProps} from '@/domain/common/params-props';

export default function Tools({params}: ParamsProps) {
  return (
    <ToolsContainer id="setup">
      <SetupContainer>
        <ToolsBox></ToolsBox>
      </SetupContainer>
    </ToolsContainer>
  );
}
