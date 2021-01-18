import { createGlobalStyle } from 'styled-components';
import treeSky from '../assets/treeSky.jpeg';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  background-image: url(${treeSky});
  border-radius: border-box;
  font-family: 'Fraunces', serif;
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
