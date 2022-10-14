import React from 'react';

import styles from './styles/WithAppearAnimation.module.scss';

type availableAnimations = 'slideBottom' | 'slideRight';

const WithAppearAnimation = (Component: React.ComponentType, animType: availableAnimations) => (
  (props) => <Component className={styles[animType]} {...props} />
);

export default WithAppearAnimation;
