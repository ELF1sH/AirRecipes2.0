import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import RecipeCardView from './RecipeCardView';
import { recipeShape } from '../../models/propTypesObjects/recipes';

const RecipeCardController = ({ recipe, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <RecipeCardView
      recipe={recipe}
      handleClick={handleClick}
      className={className}
    />
  );
};

RecipeCardController.defaultProps = {
  className: '',
};

RecipeCardController.propTypes = {
  recipe: recipeShape.isRequired,
  className: PropTypes.string,
};

export default RecipeCardController;
