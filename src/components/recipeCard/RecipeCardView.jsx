import React from 'react';
import PropTypes from 'prop-types';

import {
  Card, CardContent, CardMedia, Chip, Typography,
} from '@mui/material';

import { recipeShape } from '../../models/propTypesObjects/recipes';
import { getCookTime } from '../../helpers/recipesCalculations';
import styles from './styles/RecipeCard.module.scss';

const RecipeCardView = ({
  recipe, className, handleClick,
}) => (
  <Card className={`${styles.card} ${className}`} onClick={handleClick}>
    <CardMedia
      draggable={false}
      component="img"
      height="196"
      image={recipe.thumbnail}
      alt=""
    />
    <div className={styles.chips_container}>
      <Chip label={getCookTime(recipe.cookTime)} className={styles.chip} />
      <Chip label={`${recipe.caloricity} kCal`} className={styles.chip} />
      <Chip label={recipe.cuisine.title} className={styles.chip} />
    </div>

    <CardContent sx={{ padding: '24px', userSelect: 'none' }}>
      <Typography variant="h3" className={styles.card_header}>{recipe.title}</Typography>
      <Typography variant="body1">
        {recipe.description.length < 50
          ? recipe.description
          : `${recipe.description.substring(0, 147)}...`}
      </Typography>
    </CardContent>
  </Card>
);

RecipeCardView.defaultProps = {
  handleClick: null,
};

RecipeCardView.propTypes = {
  recipe: recipeShape.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default RecipeCardView;
