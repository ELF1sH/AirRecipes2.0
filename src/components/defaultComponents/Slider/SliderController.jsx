import { useImperativeHandle } from 'react';
import SliderView from './SliderView';

const SliderController = React.forwardRef(({
  value, setValue, onChange, min, max, className, minDistance,
}, ref) => {
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      setValue(newValue);
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }

    onChange();
  };

  useImperativeHandle(ref, () => ({
    getState: () => value,
  }), [value]);

  return (
    <SliderView
      value={value}
      handleChange={handleChange}
      min={min}
      max={max}
      className={className}
    />
  );
});

export default SliderController;
