import React from 'react';

import RecipeController from './RecipeController';
import { RecipeViewModel } from './RecipeViewModel';
import { useStore } from '../rootMobxStore/StoreProvider';

const RecipeProvider: React.FC = () => {
  const { recipesStore } = useStore();
  const viewModel = new RecipeViewModel(recipesStore);

  return (
    <RecipeController viewModel={viewModel} />
  );
};

export default RecipeProvider;
