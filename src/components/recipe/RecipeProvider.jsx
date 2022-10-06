import React from 'react';
import { useSelector } from 'react-redux';

import RecipeController from './RecipeController';

const RecipeProvider = () => {
  const recipeDetailsState = useSelector((state) => state.recipeDetails);
  console.log(recipeDetailsState);

  return (
    <RecipeController recipeDetailsState={recipeDetailsState} />
  );
};

export default RecipeProvider;
