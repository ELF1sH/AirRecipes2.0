import React from 'react';

import styles from './styles/WithAppearAnimation.module.scss';

const availableAnimations = ['slideBottom', 'slideRight'];

const WithAppearAnimation = (Component, animType) => {
  if (!availableAnimations.includes(animType)) {
    throw new Error(`Unknown animation type '${animType}'`);
  }

  return (props) => <Component className={styles[animType]} {...props} />;
};

export default WithAppearAnimation;
