import React from 'react';

import {
  ExampleComponent,
  GlobalStyle,
  RedTitle,
  fontLarge,
  fontSmall,
  abrilFatFace,
} from 'component-library';
import 'component-library/dist/index.css';
import styled from 'styled-components';

const StyledTest = styled.div`
  ${fontLarge}
  ${abrilFatFace}
`;

const TestComponent = () => <StyledTest>Some Test Text</StyledTest>;

const TestComponent2 = styled(StyledTest)`
  ${fontSmall}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ExampleComponent text='Create React Library Example 😄' />
      <RedTitle />
      <TestComponent />
      <TestComponent2>FOOBar</TestComponent2>
    </>
  );
};

export default App;
