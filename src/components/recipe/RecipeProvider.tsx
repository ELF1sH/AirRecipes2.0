import React from 'react';
import { useSelector } from 'react-redux';

import RecipeController from './RecipeController';
import { RootState } from '../../models/store';
import { RecipeDetailsStateType } from '../../models/types/recipeDetails';

const RecipeProvider = () => {
  const recipeDetailsState = useSelector<RootState>(
    (state) => state.recipeDetails,
  ) as RecipeDetailsStateType;

  return (
    <RecipeController recipeDetailsState={recipeDetailsState} />
  );
};

export default RecipeProvider;
