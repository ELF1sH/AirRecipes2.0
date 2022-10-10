import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { recipeShape } from '../../models/propTypesObjects/recipes';
import RecipesListView from './RecipesListView';
import { applyFilter, fetchRecipes } from '../../models/store/slices/recipesListSlice';
import WithLoader from '../higherOrderComponents/withLoader/WithLoader';
import styles from './styles/RecipesList.module.scss';

const RecipesListViewWithLoader = WithLoader(RecipesListView);

const RecipesListController = ({ recipesState }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!recipesState.recipes.length) {
      dispatch(fetchRecipes());
      dispatch(applyFilter());
    }
  }, []);

  return (
    <RecipesListViewWithLoader
      recipes={recipesState.recipes}
      curStatus={recipesState.status}
      progressCircleClassname={styles.progress_circle}
    />
  );
};

RecipesListController.propTypes = {
  recipesState: recipeShape.isRequired,
};

export default RecipesListController;
