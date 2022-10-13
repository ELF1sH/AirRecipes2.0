import React, {
  useEffect, useImperativeHandle, useState, RefObject,
} from 'react';

import SliderView from './SliderView';
import { GetStateHandle } from '../textField/types';

interface SliderControllerProps {
  value: number[],
  min: number,
  max: number,
  minDistance: number,
  className?: string,
  onChange?: () => void,
}

const SliderController = React.forwardRef(({
  value, min, max, minDistance, className = '', onChange = null,
}: SliderControllerProps, ref: RefObject<GetStateHandle>) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (event: Event, newValue: number[], activeThumb: 0 | 1) => {
    if (!Array.isArray(newValue)) {
      setLocalValue(newValue);
      return;
    }

    if (activeThumb === 0) {
      setLocalValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setLocalValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }

    onChange();
  };

  useImperativeHandle(ref, () => ({
    getState: () => localValue,
  }), [localValue]);

  return (
    <SliderView
      value={localValue}
      min={min}
      max={max}
      className={className}
      handleChange={handleChange}
    />
  );
});

export default SliderController;
