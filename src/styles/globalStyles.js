import { createGlobalStyle } from 'styled-components';
import six from '../assets/six_med.jpg';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  background: url(${six}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border-radius: border-box;
  font-family: 'Dosis', sans-serif;
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
