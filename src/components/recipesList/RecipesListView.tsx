import React from 'react';

import Typography from '@mui/material/Typography';

import RecipeCardController from '../recipeCard/RecipeCardController';
import WithAppearAnimation from '../higherOrderComponents/withAppearAnimation/WithAppearAnimation';
import styles from './styles/RecipesList.module.scss';
import { IRecipe } from '../../domain/entity/recipe/IRecipe';

const RecipeCardWithAppearAnim = WithAppearAnimation(RecipeCardController, 'slideBottom');

interface RecipesListViewProps {
  recipes: IRecipe[],
}

const RecipesListView: React.FC<RecipesListViewProps> = ({ recipes }) => (
  <div className={styles.grid_wrapper}>
    {recipes.length
      ? recipes.map((recipe) => <RecipeCardWithAppearAnim key={recipe.id} recipe={recipe} />)
      : (
        <Typography
          variant="h3"
          className={styles.no_recipes_message}
        >
          There is no recipes meeting specified criteria
        </Typography>
      )}
  </div>
);

export default RecipesListView;
