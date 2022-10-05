import React from 'react';
import PropTypes from 'prop-types';

import { Slider as MuiSlider } from '@mui/material';

import colors from '../../../scssAbstracts/_variables.scss';

const SliderView = ({
  value, handleChange, min, max, className = '',
}) => (
  <MuiSlider
    value={value}
    getAriaLabel={() => 'Minimum distance'}
    valueLabelDisplay="on"
    disableSwap
    size="small"
    sx={{
      color: colors.shade50,
    }}
    min={min ?? 0}
    max={max ?? 100}
    className={className}
    onChange={handleChange}
    componentsProps={{
      thumb: {
        sx: {
          userSelect: 'none',
        },
      },
      valueLabel: {
        sx: {
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          position: 'relative',
          backgroundColor: colors.shade50,
          '&::before': {
            display: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-81%',
            left: '50%',
            border: '12.6px solid transparent',
            borderBottom: `18.6px solid ${colors.shade50}`,
            transform: 'translate(-50%, 48px) rotate(180deg)',
          },
        },
      },
    }}
  />
);

SliderView.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SliderView;
