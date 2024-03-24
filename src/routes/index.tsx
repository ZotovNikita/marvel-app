import React from 'react';
import RouteObject from 'react-router-dom';
import Characters from '../pages/Characters/Characters';
import Comics from '../pages/Comics/Comics';
import CharacterDetails from '../pages/CharacterDetails/CharacterDetails'
import ComicsDetails from '../pages/ComicsDetails/ComicsDetails';

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
  },
  {
    path: '/character-details/:id', 
    element: <CharacterDetails />
  },
  {
    path: '/comics/:id', 
    element: <Comics />
  },
  {
    path: '/comics-details/:id', 
    element: <ComicsDetails />
  },
];

export default routes;