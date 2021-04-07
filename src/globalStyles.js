import { createGlobalStyle } from 'styled-components';
import { colours, typography } from './design-system';

// import font1 from './fonts/abrilfatface-regular.woff';
// import font2 from './fonts/abrilfatface-regular.woff2';
// const abrilFont2 = require(font2);
// const abrilFont1 = require(font1);

const GlobalStyle = createGlobalStyle`
  :root {
    ${colours}
    ${typography}
  }
`;

export default GlobalStyle;

// @font-face {
//   font-family: 'abril_fatface';
//   src: url(${abrilFont2}) format('woff2'),
//        url(${abrilFont1}) format('woff');
//   font-weight: normal;
//   font-style: normal;
// }
