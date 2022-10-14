import React, { useEffect } from 'react';

import { useAppDispatch } from '../../models/store';
import { RecipesStateType } from '../../models/types/recipes';
import RecipesListView from './RecipesListView';
import { applyFilter, fetchRecipes } from '../../models/store/slices/recipesListSlice';
import WithLoader from '../higherOrderComponents/withLoader/WithLoader';
import styles from './styles/RecipesList.module.scss';

const RecipesListViewWithLoader = WithLoader(RecipesListView);

interface RecipesListControllerProps {
  recipesState: RecipesStateType,
}

const RecipesListController: React.FC<RecipesListControllerProps> = ({ recipesState }) => {
  const dispatch = useAppDispatch();

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

export default RecipesListController;
