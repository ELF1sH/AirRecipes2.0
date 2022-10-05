import React from 'react';
import PropTypes from 'prop-types';

import RecipeCardController from '../recipeCard/RecipeCardController';
import AppearAnimation from '../higherOrderComponents/appearAnimation/AppearAnimation';
import { recipeShape } from '../../models/propTypesObjects/Recipes';
import styles from './styles/RecipesList.module.scss';

const RecipeCardWithAppearAnim = AppearAnimation(RecipeCardController, 'slideBottom');

const RecipesListView = ({ recipes }) => (
  <div className={styles.grid_wrapper}>
    {recipes.map((recipe) => <RecipeCardWithAppearAnim key={recipe.id} recipe={recipe} />)}
  </div>
);

RecipesListView.propTypes = {
  recipes: PropTypes.arrayOf(recipeShape).isRequired,
};

export default RecipesListView;
