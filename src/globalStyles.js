import { createGlobalStyle } from 'styled-components';
import { colours, typography } from './design-system';

const GlobalStyle = createGlobalStyle`
  :root {
    ${colours}
    ${typography}
  }
`;

export default GlobalStyle;
