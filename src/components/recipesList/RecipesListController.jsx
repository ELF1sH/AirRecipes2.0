import React from 'react';

import { recipeShape } from '../../models/propTypesObjects/Recipes';
import RecipesListView from './RecipesListView';

const RecipesListController = ({ recipesState }) => (
  <RecipesListView
    recipes={recipesState.recipes}
  />
);

RecipesListController.propTypes = {
  recipesState: recipeShape.isRequired,
};

export default RecipesListController;
