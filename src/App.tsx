import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import routes from './routes';

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Outlet />
      </Layout>
    </Router>
  );
}

export default App;
