import React from 'react';

import { Typography } from '@mui/material';

import styles from './styles/IconWithText.module.scss';
import colors from '../../../scssAbstracts/_variables.scss';

interface IconWithTextProps {
  Icon: React.ComponentType<{className: string, fill: string, stroke: string}>,
  text: string,
  color?: string,
  className?: string,
}

const IconWithText: React.FC<IconWithTextProps> = ({
  Icon, text, color = null, className = '',
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

export default IconWithText;
