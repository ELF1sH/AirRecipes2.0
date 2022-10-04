import React from 'react';
import { useSelector } from 'react-redux';

import RecipesListController from './RecipesListController';

const RecipesListProvider = () => {
  const recipesState = useSelector((state) => state.recipes);

  return (
    <RecipesListController recipesState={recipesState} />
  );
};

export default RecipesListProvider;
