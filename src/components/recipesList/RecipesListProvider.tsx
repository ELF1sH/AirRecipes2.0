import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../models/store';
import RecipesListController from './RecipesListController';
import { RecipesStateType } from '../../models/types/recipes';

const RecipesListProvider = () => {
  const recipesState: RecipesStateType = useSelector<RootState>((state) => state.recipes);

  return (
    <RecipesListController
      recipesState={recipesState}
    />
  );
};

export default RecipesListProvider;
