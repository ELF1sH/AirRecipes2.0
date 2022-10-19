import React from 'react';

import RecipeCardController from '../recipeCard/RecipeCardController';
import WithAppearAnimation from '../higherOrderComponents/withAppearAnimation/WithAppearAnimation';
import { RecipeType } from '../../models/types/recipesListTypes';
import styles from './styles/RecipesList.module.scss';

const RecipeCardWithAppearAnim = WithAppearAnimation(RecipeCardController, 'slideBottom');

interface RecipesListViewProps {
  recipes: RecipeType[],
}

const RecipesListView: React.FC<RecipesListViewProps> = ({ recipes }) => (
  <div className={styles.grid_wrapper}>
    {recipes.map((recipe) => <RecipeCardWithAppearAnim key={recipe.id} recipe={recipe} />)}
  </div>
);

export default RecipesListView;
