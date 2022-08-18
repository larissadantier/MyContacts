import styled from 'styled-components';

export const Container = styled.div`
 padding: 16px 32px;
 background: ${({ theme }) => theme.colors.primary.main};
 border-radius: 4px;

 display: flex;
 justify-content: center;

 color: #FFF;

 & + & {
  margin-top: 12px;
 }
`;
