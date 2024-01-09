import Image from 'next/image';
import styled from 'styled-components';

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToolsBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

export const ToolsImage = styled(Image)`
  padding: 20px;
  background-color: var(--card);
  border-radius: 12px;
`;
