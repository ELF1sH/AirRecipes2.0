import React from 'react';
import styles from './styles/RoundButton.module.scss';

const RoundButtonView = React.forwardRef(({ event, onClick, iconSrc }, ripple) => (
  <button ref={ripple} onMouseDown={event} onClick={onClick} className={styles.btn}>
    <img src={iconSrc} alt="" draggable={false} />
  </button>
));

export default RoundButtonView;
