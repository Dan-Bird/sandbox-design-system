import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

var styles = {"test":"_styles-module__test__3ybTi"};

var colours = `
  --primary-colour: orange;
  --secondary-colour: green;
  --tertiary-colour: purple;
`;

var typography = `
  --font-size-large: 5rem;
  --font-size-medium: 3rem;
  --font-size-small: 1rem;
`;

const fontLarge = () => `
  font-size: var(--font-size-large);
  color: var(--secondary-colour);
`;
const fontSmall = () => `
  font-size: var(--font-size-small);
  color: var(--primary-colour);
`;
const abrilFatFace = () => `
  font-family: 'abril_fatface', sans-serif;
  font-weight: normal;
  font-style: normal;
`;

let _ = t => t,
    _t;
const GlobalStyle = createGlobalStyle(_t || (_t = _`
  :root {
    ${0}
    ${0}
  }
`), colours, typography);

let _$1 = t => t,
    _t$1;
const Title = styled.h1(_t$1 || (_t$1 = _$1`
  font-weight: bold;
  text-transform: uppercase;
`));

const BaseTitle = ({
  className
}) => {
  return /*#__PURE__*/React.createElement(Title, {
    className: className
  }, "Base Title");
};

let _$2 = t => t,
    _t$2;
const RedTitle = styled(BaseTitle)(_t$2 || (_t$2 = _$2`
  ${0}
  text-decoration: underline;
`), fontLarge);

let _$3 = t => t,
    _t$3;
const Button = styled.button(_t$3 || (_t$3 = _$3`
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`));

const BaseButton = ({
  className,
  children,
  ...otherProps
}) => {
  return /*#__PURE__*/React.createElement(Button, Object.assign({
    className: className
  }, otherProps), children);
};

let _$4 = t => t,
    _t$4;
const PrimaryButton = styled(BaseButton)(_t$4 || (_t$4 = _$4`
  color: white;
  background-color: blue;
`));

const ExampleComponent = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { ExampleComponent, GlobalStyle, PrimaryButton, RedTitle, abrilFatFace, colours, fontLarge, fontSmall, typography };
//# sourceMappingURL=index.modern.js.map
