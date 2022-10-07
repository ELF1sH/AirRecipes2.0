import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as DifficultyIcon } from '../../../../assets/icons/recipeDetailsIcons/difficultyIcon.svg';
import { ReactComponent as CaloriesIcon } from '../../../../assets/icons/recipeDetailsIcons/caloriesIcon.svg';
import { ReactComponent as CuisineIcon } from '../../../../assets/icons/recipeDetailsIcons/cuisineIcon.svg';
import { ReactComponent as TimeIcon } from '../../../../assets/icons/recipeDetailsIcons/timeIcon.svg';
import { getCookTime } from '../../../../helpers/recipesCalculations';
import styles from './styles/BriefInfoPanel.module.scss';
import IconWithText from '../../../iconWithText/IconWithText';

const BriefInfoPanel = ({
  difficulty, cookTime, caloricity, cuisineTitle, className,
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
      text={caloricity}
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

BriefInfoPanel.defaultProps = {
  className: '',
};

BriefInfoPanel.propTypes = {
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  cookTime: PropTypes.number.isRequired,
  caloricity: PropTypes.number.isRequired,
  cuisineTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BriefInfoPanel;
