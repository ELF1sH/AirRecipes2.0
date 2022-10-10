import React from 'react';
import { Routes, Route } from 'react-router-dom';

import routes from './routes';

const RoutesWrapper = () => (
  <Routes>
    {
      routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.id} />
      ))
    }
  </Routes>
);

export default RoutesWrapper;
