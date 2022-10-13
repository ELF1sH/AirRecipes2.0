import React from 'react';

import { CircularProgress } from '@mui/material';

import colors from '../../../scssAbstracts/_variables.scss';

interface ProgressCircleViewProps {
  className?: string,
}

const ProgressCircleView: React.FC<ProgressCircleViewProps> = ({
  className = '',
}) => (
  <CircularProgress
    size="3rem"
    sx={{
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      color: colors.shade50,
    }}
    className={className}
  />
);

export default ProgressCircleView;
