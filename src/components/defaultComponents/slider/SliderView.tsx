import React from 'react';

import Slider from '@mui/material/Slider';

import { ActiveThumb } from './types';

interface SliderViewProps {
  value: number[],
  min: number,
  max: number,
  className: string,
  handleChange?: (event: Event, newValue: number[], activeThumb: ActiveThumb) => void,
}

const SliderView = ({
  value, handleChange, min, max, className,
} : SliderViewProps) => (
  <Slider
    value={value}
    getAriaLabel={() => 'Minimum distance'}
    valueLabelDisplay="on"
    disableSwap
    size="small"
    min={min ?? 0}
    max={max ?? 100}
    className={className}
    onChange={handleChange}
  />
);

export default SliderView;
