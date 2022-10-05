import React from 'react';

import RoutesWrapper from './components/routesWrapper/RoutesWrapperProvider';
import Header from './components/header/HeaderProvider';

const App = () => (
  <div>
    <Header />
    <RoutesWrapper />
  </div>
);

export default App;
