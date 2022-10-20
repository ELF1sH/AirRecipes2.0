import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../models/store';
import RecipesListController from './RecipesListController';
import { RecipesStateType } from '../../models/types/recipesListTypes';

const RecipesListProvider = () => {
  const recipesState = useSelector<RootState>((state) => state.recipes) as RecipesStateType;

  return (
    <RecipesListController
      recipesState={recipesState}
    />
  );
};

export default RecipesListProvider;
