import React from 'react';

import { ExampleComponent, GlobalStyle, RedTitle } from 'component-library';
import {} from 'component-library/src/';
import 'component-library/dist/index.css';
import styled from 'styled-components';

// const StyledTest = styled.div`
//   ${fontLarge}
// `;

// const TestComponent = () => <StyledTest>Some Test Text</StyledTest>;

// const TestComponent2 = styled(StyledTest)`
//   ${fontSmall}
// `;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ExampleComponent text='Create React Library Example 😄' />
      <RedTitle />
      {/* <TestComponent />
      <TestComponent2>FOOBar</TestComponent2> */}
    </>
  );
};

export default App;
