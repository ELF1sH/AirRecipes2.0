import React from 'react';
import PropTypes from 'prop-types';

import {
  Card, CardContent, CardMedia, Chip, Typography,
} from '@mui/material';

import styles from './styles/RecipeCard.module.scss';

import { recipeShape } from '@models/propTypesObjects/recipes';
import { getCookTime } from '@helpers/recipesCalculations';

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
      <Typography
        variant="body1"
        sx={{
          display: '-webkit-box',
          WebkitLineClamp: '4',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {recipe.description}
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
