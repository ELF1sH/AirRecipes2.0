import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { recipeShape } from '../../models/propTypesObjects/Recipes';
import RecipesListView from './RecipesListView';
import { fetchRecipes } from '../../models/store/slices/recipesListSlice';

const RecipesListController = ({ recipesState }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!recipesState.recipes.recipes) {
      dispatch(fetchRecipes());
      // dispatch(applyFilter());
    }
  }, []);

  return (
    <RecipesListView />
  );
};

RecipesListController.propTypes = {
  recipesState: recipeShape.isRequired,
};

export default RecipesListController;
