import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RecipesListController from './RecipesListController';
import WithLoader from '../higherOrderComponents/withLoader/WithLoader';
import { applyFilter, fetchRecipes } from '../../models/store/slices/recipesListSlice';
import styles from './styles/RecipesList.module.scss';

const RecipesListControllerWithLoader = WithLoader(RecipesListController);

const RecipesListProvider = () => {
  const dispatch = useDispatch();
  const recipesState = useSelector((state) => state.recipes);

  useEffect(() => {
    if (!recipesState.recipes.length) {
      dispatch(fetchRecipes());
      dispatch(applyFilter());
    }
  });
  console.log(recipesState);

  return (
    <RecipesListControllerWithLoader
      recipesState={recipesState}
      curStatus={recipesState.status}
      progressCircleClassname={styles.progress_circle}
    />
  );
};

export default RecipesListProvider;
