import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import RecipeView from './RecipeView';
import WithLoader from '../higherOrderComponents/withLoader/WithLoader';
import { fetchRecipeDetails } from '../../models/store/slices/recipeSlice';
import styles from './styles/Recipe.module.scss';
import { useAppDispatch } from '../../models/store';
import { RecipeDetailsStateType } from '../../models/types/recipeDetails';

const RecipeViewWithLoader = WithLoader(RecipeView);

interface RecipeControllerProps {
  recipeDetailsState: RecipeDetailsStateType,
}

const RecipeController: React.FC<RecipeControllerProps> = ({
  recipeDetailsState,
}) => {
  const dispatch = useAppDispatch();
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

export default RecipeController;
