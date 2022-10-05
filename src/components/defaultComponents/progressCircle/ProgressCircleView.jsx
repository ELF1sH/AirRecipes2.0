import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@mui/material';

import colors from '../../../scssAbstracts/_variables.scss';

const ProgressCircleView = ({ className }) => (
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

ProgressCircleView.defaultProps = {
  className: '',
};

ProgressCircleView.propTypes = {
  className: PropTypes.string,
};

export default ProgressCircleView;
