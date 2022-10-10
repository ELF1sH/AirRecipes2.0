import PropTypes from 'prop-types';

import { cuisineShape } from './recipes';

export const recipeDetailsShape = PropTypes.shape({
  id: PropTypes.number,
  caloricity: PropTypes.number,
  cookTime: PropTypes.number,
  cuisine: cuisineShape,
  description: PropTypes.string,
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  images: PropTypes.arrayOf(PropTypes.string),
  ingredients: PropTypes.arrayOf(PropTypes.string),
  instructions: PropTypes.arrayOf(PropTypes.string),
  thumbnail: PropTypes.string,
  title: PropTypes.string,
});

export const recipeDetailsStateShape = PropTypes.shape({
  recipeDetails: recipeDetailsShape,
  error: PropTypes.string,
  status: PropTypes
    .oneOf(['pending', 'resolved', 'rejected'])
    .isRequired,
});
