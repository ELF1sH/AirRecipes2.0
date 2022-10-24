import React, { RefObject } from 'react';

import SliderView from './SliderView';
import { GetStateHandle, ActiveThumb } from './types';

interface SliderControllerProps {
  min: number,
  max: number,
  minDistance: number,
  value: number[],
  onChange: (newValue: number[]) => void,
  className?: string,
}

const SliderController = React.forwardRef(({
  min,
  max,
  minDistance,
  value = [min, max],
  className = '',
  onChange,
}: SliderControllerProps, ref: RefObject<GetStateHandle>) => {
  const handleChange = (event: Event, newValue: number[], activeThumb: ActiveThumb) => {
    if (activeThumb === 0) {
      onChange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      onChange([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <SliderView
      value={value}
      min={min}
      max={max}
      className={className}
      handleChange={handleChange}
    />
  );
});

export default SliderController;
