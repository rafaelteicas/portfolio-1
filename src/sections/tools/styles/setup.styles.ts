import Image from 'next/image';
import styled from 'styled-components';

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  gap: var(--contentGap);
`;

export const ToolsImage = styled(Image)`
  padding: 20px;
  background-color: var(--card);
  border-radius: 12px;
`;

export const ToolsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--card);
  padding: 10px;
  border-radius: 12px;
`;
