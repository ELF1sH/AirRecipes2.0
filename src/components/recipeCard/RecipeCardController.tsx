import React from 'react';
import { useNavigate } from 'react-router-dom';

import RecipeCardView from './RecipeCardView';
import { RecipeType } from '../../models/types/recipes';

interface RecipeCardControllerProps {
  recipe: RecipeType,
  className?: string,
}

const RecipeCardController: React.FC<RecipeCardControllerProps> = ({
  recipe,
  className = '',
}) => {
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

export default RecipeCardController;
