import React from 'react';

import { ReactComponent as DifficultyIcon } from '../../../../assets/icons/recipeDetailsIcons/difficultyIcon.svg';
import { ReactComponent as CaloriesIcon } from '../../../../assets/icons/recipeDetailsIcons/caloriesIcon.svg';
import { ReactComponent as CuisineIcon } from '../../../../assets/icons/recipeDetailsIcons/cuisineIcon.svg';
import { ReactComponent as TimeIcon } from '../../../../assets/icons/recipeDetailsIcons/timeIcon.svg';
import { getCookTime } from '../../../../helpers/recipesCalculations';
import styles from './styles/BriefInfoPanel.module.scss';
import IconWithText from '../../../defaultComponents/iconWithText/IconWithText';
import { Difficulty } from '../../../../models/types/recipeDetails';

interface BriefInfoPanelProps {
  difficulty: Difficulty,
  cookTime: number,
  caloricity: number,
  cuisineTitle: string,
  className?: string,
}

const BriefInfoPanel: React.FC<BriefInfoPanelProps> = ({
  difficulty, cookTime, caloricity, cuisineTitle, className = '',
}) => (
  <div className={`${styles.brief_info} ${className}`}>

    <IconWithText
      text={difficulty}
      Icon={DifficultyIcon}
      color={difficulty}
      className={styles.icon_with_text}
    />

    <IconWithText
      text={getCookTime(cookTime)}
      Icon={TimeIcon}
      className={styles.icon_with_text}
    />

    <IconWithText
      text={caloricity.toString()}
      Icon={CaloriesIcon}
      className={styles.icon_with_text}
    />

    <IconWithText
      text={cuisineTitle}
      Icon={CuisineIcon}
      className={styles.icon_with_text}
    />

  </div>
);

export default BriefInfoPanel;
