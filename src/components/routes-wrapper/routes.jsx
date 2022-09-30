import React from 'react';
import RecipesListProvider from '../recipes-list/RecipesListProvider';
import RecipeProvider from '../recipe/RecipeProvider';

const routes = [
  {
    id: 1,
    path: '/',
    element: <RecipesListProvider />,
  },
  {
    id: 2,
    path: 'recipe/:recipeId',
    element: <RecipeProvider />,
  },
];

export default routes;
