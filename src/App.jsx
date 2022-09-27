import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesWrapper from './components/RoutesWrapper/RoutesWrapperProvider';
import Header from './components/Header/HeaderProvider';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <RoutesWrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
