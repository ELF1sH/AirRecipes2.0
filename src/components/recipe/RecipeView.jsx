import React from 'react';

import { Typography } from '@mui/material';

import { recipeDetailsShape } from '../../models/propTypesObjects/recipeDetails';
import BriefInfoPanel from './components/briefInfoPanel/BriefInfoPanel';
import List from '../defaultComponents/list/ListController';
import styles from './styles/Recipe.module.scss';
import Carousel from '../defaultComponents/carousel/CarouselView';

const RecipeView = ({ recipeDetails }) => (
  <div className={styles.flex_container}>
    <div className={styles.flex_column}>
      <Typography
        variant="h2"
        sx={{ marginBottom: '16px' }}
      >
        {recipeDetails.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: '16px' }}
      >
        {recipeDetails.description}
      </Typography>
      <BriefInfoPanel
        difficulty={recipeDetails.difficulty}
        cookTime={recipeDetails.cookTime}
        caloricity={recipeDetails.caloricity}
        cuisineTitle={recipeDetails.cuisine.title}
        className={styles.mb24}
      />
      <List header="Ingredients" items={recipeDetails.ingredients} className={styles.mb32} />
      <List header="Instructions" items={recipeDetails.instructions} countBullet />
    </div>

    <div className={styles.flex_column}>
      <Carousel images={recipeDetails.images} className={styles.image} />
    </div>
  </div>
);

RecipeView.propTypes = {
  recipeDetails: recipeDetailsShape.isRequired,
};

export default RecipeView;
