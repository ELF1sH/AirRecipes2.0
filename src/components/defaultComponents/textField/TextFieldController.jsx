import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TextFieldView from './TextFieldView';

export const TextFieldController = React.forwardRef((
  {
    value, onChange, className, placeholder,
  },
  ref,
) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleClear = () => {
    onChange('');
  };

  const localOnChange = (event) => {
    setLocalValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <TextFieldView
      ref={ref}
      value={localValue}
      placeholder={placeholder}
      className={className}
      handleChange={localOnChange}
      handleClear={handleClear}
    />
  );
});

TextFieldController.defaultProps = {
  value: '',
  onChange: null,
  className: '',
  placeholder: '',
};

TextFieldController.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextFieldController;
