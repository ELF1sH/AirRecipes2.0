import React from 'react';
import { useSelector } from 'react-redux';

import RecipeController from './RecipeController';

const RecipeProvider = () => {
  const recipeDetailsState = useSelector((state) => state.recipeDetails);

  return (
    <RecipeController recipeDetailsState={recipeDetailsState} />
  );
};

export default RecipeProvider;
