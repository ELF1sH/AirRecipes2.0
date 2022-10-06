import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as DifficultyIcon } from '../../../../assets/icons/recipeDetailsIcons/difficultyIcon.svg';
import { ReactComponent as CaloriesIcon } from '../../../../assets/icons/recipeDetailsIcons/caloriesIcon.svg';
import { ReactComponent as CuisineIcon } from '../../../../assets/icons/recipeDetailsIcons/cuisineIcon.svg';
import { ReactComponent as TimeIcon } from '../../../../assets/icons/recipeDetailsIcons/timeIcon.svg';
import { getCookTime } from '../../../../helpers/recipesCalculations';
import styles from './styles/BriefInfoPanel.module.scss';
import colors from '../../../../scssAbstracts/_variables.scss';

const BriefInfoPanel = ({
  difficulty, cookTime, caloricity, cuisineTitle, className,
}) => (
  <div className={`${styles.brief_info} ${className}`}>

    <div className={styles.item}>
      <DifficultyIcon
        fill={colors[difficulty]}
        stroke={colors[difficulty]}
        className={styles.icon}
      />
      <p className={styles[difficulty]}>{difficulty}</p>
    </div>

    <div className={styles.item}>
      <TimeIcon className={styles.icon} />
      <p>{getCookTime(cookTime)}</p>
    </div>

    <div className={styles.item}>
      <CaloriesIcon className={styles.icon} />
      <p>{caloricity}</p>
    </div>

    <div className={styles.item}>
      <CuisineIcon className={styles.icon} />
      <p>{cuisineTitle}</p>
    </div>

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
