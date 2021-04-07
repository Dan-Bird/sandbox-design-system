import React from 'react';

import { ExampleComponent, GlobalStyle, RedTitle } from 'component-library';
import 'component-library/dist/index.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ExampleComponent text='Create React Library Example 😄' />
      <RedTitle />
    </>
  );
};

export default App;
