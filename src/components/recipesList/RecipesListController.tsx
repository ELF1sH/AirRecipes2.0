import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import RecipesListView from './RecipesListView';
import WithLoader from '../higherOrderComponents/withLoader/WithLoader';
import { RecipesListViewModel } from './RecipesListViewModel';
import { Status } from '../../domain/entity/request/Status';
import styles from './styles/RecipesList.module.scss';

const RecipesListViewWithLoader = WithLoader(RecipesListView);

interface RecipesListControllerProps {
  viewModel: RecipesListViewModel,
}

const RecipesListController: React.FC<RecipesListControllerProps> = ({ viewModel }) => {
  const { recipes, fetchRecipes } = viewModel;

  useEffect(() => {
    if (!recipes) {
      (async () => {
        await fetchRecipes();
      })();
    }
  }, []);

  return (
    <RecipesListViewWithLoader
      recipes={recipes}
      curStatus={!recipes ? Status.PENDING : Status.RESOLVED}
      progressCircleClassname={styles.progress_circle}
    />
  );
};

export default observer(RecipesListController);
