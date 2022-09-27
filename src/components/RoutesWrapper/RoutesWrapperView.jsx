import { Routes, Route } from 'react-router-dom';
import routes from './routes';

function RoutesWrapperView() {
  return (
    <div>
      <Routes>
        {
          routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.id} />
          ))
        }
      </Routes>
    </div>
  );
}

export default RoutesWrapperView;
