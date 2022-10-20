import React from 'react';
import { MinimalEvent } from 'use-ripple-hook/ripple';

import styles from './styles/RoundButton.module.scss';

interface RoundButtonViewProps {
  onRipple: (event: MinimalEvent) => void,
  iconSrc?: string,
  handleClick?: () => void,
}

const RoundButtonView = React.forwardRef<HTMLButtonElement, RoundButtonViewProps>(({
  iconSrc,
  onRipple,
  handleClick,
}, ripple) => (
  <button ref={ripple} className={styles.btn} type="button" onMouseDown={onRipple} onClick={handleClick}>
    <img src={iconSrc} alt="" draggable={false} />
  </button>
));

export default RoundButtonView;
