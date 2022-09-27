import PropTypes from 'prop-types';

export const cuisineShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
});

export const recipeShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  caloricity: PropTypes.number,
  cookTime: PropTypes.number,
  cuisine: cuisineShape,
  thumbnail: PropTypes.string,
});

export const filterShape = PropTypes.shape({
  calFilter: PropTypes.arrayOf(PropTypes.number),
  cuisineFilter: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.bool,
  })),
  nameFilter: PropTypes.string,
});

export const recipesShape = PropTypes.shape({
  cuisines: PropTypes
    .arrayOf(cuisineShape)
    .isRequired,
  curFilterState: filterShape.isRequired,
  filterState: filterShape.isRequired,
  initialRecipes: PropTypes
    .arrayOf(recipeShape)
    .isRequired,
  recipes: PropTypes
    .arrayOf(recipeShape)
    .isRequired,
  error: PropTypes.string,
  status: PropTypes
    .string
    .isRequired,
});
