import React from 'react';
import RouteObject from 'react-router-dom';
import Characters from '../pages/Characters/Characters';
import Comics from '../pages/Comics/Comics';

const routes: RouteObject.RouteObject[] = [
  {
    path: '', 
    element: <Characters /> 
  },
  {
    path: '/characters',
    element: <Characters />
  },
  {
    path: '/comics',
    element: <Comics />
  }
];

export default routes;