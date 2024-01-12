import Image from 'next/image';
import styled from 'styled-components';

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SetupContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  margin-top: 20px;
  background-color: var(--bg);
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const ToolsImage = styled(Image)`
  padding: 20px;
  background-color: var(--card);
  border-radius: 12px;
`;

export const ToolsBox = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
