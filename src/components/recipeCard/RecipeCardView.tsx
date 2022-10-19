import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import { RecipeType } from '../../models/types/recipesListTypes';
import { getCookTime } from '../../helpers/recipesCalculations';
import styles from './styles/RecipeCard.module.scss';

interface RecipeCardViewProps {
  recipe: RecipeType,
  className: string,
  handleClick: () => void,
}

const RecipeCardView: React.FC<RecipeCardViewProps> = ({
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

export default RecipeCardView;
