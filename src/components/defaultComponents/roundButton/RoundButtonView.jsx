import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/RoundButton.module.scss';

const RoundButtonView = React.forwardRef(({ event, handleClick, iconSrc }, ripple) => (
  <button ref={ripple} className={styles.btn} type="button" onMouseDown={event} onClick={handleClick}>
    <img src={iconSrc} alt="" draggable={false} />
  </button>
));

RoundButtonView.propTypes = {
  event: PropTypes.func.isRequired,
  iconSrc: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default RoundButtonView;
