import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Sora', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
