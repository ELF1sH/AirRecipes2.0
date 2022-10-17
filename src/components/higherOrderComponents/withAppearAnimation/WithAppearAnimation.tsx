import React from 'react';

import { availableAnimations } from './types';
import styles from './styles/WithAppearAnimation.module.scss';

const WithAppearAnimation = (Component: React.ComponentType, animType: availableAnimations) => (
  (props) => <Component className={styles[animType]} {...props} />
);

export default WithAppearAnimation;
