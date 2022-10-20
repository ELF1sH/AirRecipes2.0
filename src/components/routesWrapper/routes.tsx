import React from 'react';

import RecipesListProvider from '../recipesList/RecipesListProvider';
import RecipeProvider from '../recipe/RecipeProvider';
import Header from '../header/HeaderProvider';
import { RouteType } from './types';

const routes: RouteType[] = [
  {
    id: 1,
    path: '/',
    element: (
      <>
        <Header isFixed={false} />
        <RecipesListProvider />
      </>
    ),
  },
  {
    id: 2,
    path: 'recipe/:recipeId',
    element: (
      <>
        <Header isFixed />
        <RecipeProvider />
      </>
    ),
  },
];

export default routes;
