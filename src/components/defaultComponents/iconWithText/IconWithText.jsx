import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

import styles from './styles/IconWithText.module.scss';

import colors from '@scssAbstracts/_variables.scss';

const IconWithText = ({
  Icon, text, color, className,
}) => (
  <div className={`${styles.wrapper} ${className}`}>
    <Icon
      className={styles.icon}
      fill={color ? colors[color] : 'none'}
      stroke={color && colors[color]}
    />
    <Typography
      variant="body1"
      sx={{ color: color && colors[color] }}
    >
      {text}
    </Typography>
  </div>
);

IconWithText.defaultProps = {
  color: null,
  className: '',
};

IconWithText.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default IconWithText;
