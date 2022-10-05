import React from 'react';

import styles from './styles/AppearAnimation.module.scss';

const availableAnimations = ['slideBottom', 'slideRight'];

const AppearAnimation = (Component, animType) => {
  if (!availableAnimations.includes(animType)) {
    throw new Error('Unknown animation type');
  }

  return (props) => <Component className={styles[animType]} {...props} />;
};

export default AppearAnimation;
