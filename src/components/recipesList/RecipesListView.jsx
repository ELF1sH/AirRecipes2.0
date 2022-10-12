import React from 'react';
import PropTypes from 'prop-types';

import RecipeCardController from '../recipeCard/RecipeCardController';
import styles from './styles/RecipesList.module.scss';

import WithAppearAnimation from '@higherOrderComponents/withAppearAnimation/WithAppearAnimation';
import { recipeShape } from '@models/propTypesObjects/recipes';

const RecipeCardWithAppearAnim = WithAppearAnimation(RecipeCardController, 'slideBottom');

const RecipesListView = ({ recipes }) => (
  <div className={styles.grid_wrapper}>
    {recipes.map((recipe) => <RecipeCardWithAppearAnim key={recipe.id} recipe={recipe} />)}
  </div>
);

RecipesListView.propTypes = {
  recipes: PropTypes.arrayOf(recipeShape).isRequired,
};

export default RecipesListView;
