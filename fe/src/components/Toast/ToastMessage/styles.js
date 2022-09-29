import styled, { css } from 'styled-components';

const containerVariants = (theme, type = 'default') => ({
  default: css`
      background: ${theme.colors.primary.main};
    `,
  danger: css`
  background: ${theme.colors.danger.main};
`,
  success: css`
      background: ${theme.colors.success.main};
    `,
}[type]);

export const Container = styled.div`
 color: #FFF;
 box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);

 padding: 16px 32px;
 border-radius: 4px;

 display: flex;
 align-items: center;
 justify-content: center;

 cursor: pointer;

 ${({ theme, type }) => containerVariants(theme, type) || containerVariants('default')}


  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
