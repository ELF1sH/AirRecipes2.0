import React from 'react';

import RoutesWrapper from './components/routesWrapper/RoutesWrapper';
import Header from './components/header/HeaderProvider';
import MainContainer from './components/mainContainer/MainContainer';

const App = () => (
  <div>
    <Header />
    <MainContainer>
      <RoutesWrapper />
    </MainContainer>
  </div>
);

export default App;
