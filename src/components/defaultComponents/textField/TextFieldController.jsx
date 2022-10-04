import React from 'react';
import PropTypes from 'prop-types';

import TextFieldView from './TextFieldView';

export const TextFieldController = React.forwardRef((
  {
    value, setValue, className, placeholder,
  },
  ref,
) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <TextFieldView
      ref={ref}
      value={value}
      placeholder={placeholder}
      className={className}
      handleChange={handleChange}
      handleClear={handleClear}
    />
  );
});

TextFieldController.defaultProps = {
  value: '',
  setValue: null,
  className: '',
  placeholder: '',
};

TextFieldController.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
};

export default TextFieldController;
