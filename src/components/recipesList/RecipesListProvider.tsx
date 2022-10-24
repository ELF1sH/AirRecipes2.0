import React from 'react';

import RecipesListController from './RecipesListController';
import { RecipesListViewModel } from './RecipesListViewModel';
import { useStore } from '../rootMobxStore/StoreProvider';

const RecipesListProvider: React.FC = () => {
  const { recipesStore } = useStore();
  const viewModel = new RecipesListViewModel(recipesStore);

  return (
    <RecipesListController
      viewModel={viewModel}
    />
  );
};

export default RecipesListProvider;
