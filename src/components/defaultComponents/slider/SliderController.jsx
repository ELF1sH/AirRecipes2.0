import React, { useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';

import SliderView from './SliderView';

const SliderController = React.forwardRef(({
  value, onChange, min, max, className, minDistance,
}, ref) => {
  const [localValue, setValue] = useState(value);

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
      value={localValue}
      min={min}
      max={max}
      className={className}
      handleChange={handleChange}
    />
  );
});

SliderController.defaultProps = {
  className: '',
};

SliderController.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  minDistance: PropTypes.number.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SliderController;
