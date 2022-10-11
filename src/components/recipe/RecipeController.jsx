import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import RecipeView from './RecipeView';
import styles from './styles/Recipe.module.scss';

import WithLoader from '@higherOrderComponents/withLoader/WithLoader';
import { fetchRecipeDetails } from '@models/store/slices/recipeSlice';
import { recipeDetailsStateShape } from '@models/propTypesObjects/recipeDetails';

const RecipeViewWithLoader = WithLoader(RecipeView);

const RecipeController = ({ recipeDetailsState }) => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchRecipeDetails({ id: params.recipeId }));
  }, []);

  return (
    <RecipeViewWithLoader
      curStatus={recipeDetailsState.status}
      recipeDetails={recipeDetailsState.recipeDetails}
      progressCircleClassname={styles.progress_circle}
    />
  );
};

RecipeController.propTypes = {
  recipeDetailsState: recipeDetailsStateShape.isRequired,
};

export default RecipeController;
