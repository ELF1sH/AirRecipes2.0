import React from 'react';

import { Slider as MuiSlider } from '@mui/material';

import { sliderSx } from './styles/styles';

interface SliderViewProps {
  value: Array<number>,
  min: number,
  max: number,
  handleChange: (event: Event, newValue: Array<number>, activeThumb: 0 | 1) => void,
  className: string,
}

const SliderView = ({
  value, handleChange, min, max, className,
} : SliderViewProps) => (
  <MuiSlider
    value={value}
    getAriaLabel={() => 'Minimum distance'}
    valueLabelDisplay="on"
    disableSwap
    size="small"
    sx={sliderSx}
    min={min ?? 0}
    max={max ?? 100}
    className={className}
    onChange={handleChange}
  />
);

export default SliderView;
