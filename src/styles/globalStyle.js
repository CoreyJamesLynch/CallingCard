import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  }

  body {
    background-color: orange;
    font-family: 'Fraunces', serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
