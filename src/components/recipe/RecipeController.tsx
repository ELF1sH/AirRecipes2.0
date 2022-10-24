import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import RecipeView from './RecipeView';
import WithLoader from '../higherOrderComponents/withLoader/WithLoader';
import styles from './styles/Recipe.module.scss';
import { RecipeViewModel } from './RecipeViewModel';
import { Status } from '../../domain/entity/request/Status';

interface RecipeControllerProps {
  viewModel: RecipeViewModel,
}

const RecipeController: React.FC<RecipeControllerProps> = ({
  viewModel,
}) => {
  const params = useParams<string>();
  const { recipeDetails, fetchRecipeDetails } = viewModel;

  useEffect(() => {
    (async () => {
      if (params.recipeId) {
        await fetchRecipeDetails(+params.recipeId);
      }
    })();
  }, [params.recipeId]);

  const RecipeViewWithLoader = WithLoader(RecipeView);

  return (
    <RecipeViewWithLoader
      curStatus={!recipeDetails ? Status.PENDING : Status.RESOLVED}
      recipeDetails={recipeDetails}
      progressCircleClassname={styles.progress_circle}
    />
  );
};

export default observer(RecipeController);
