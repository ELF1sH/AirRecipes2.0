import React from 'react';
import TextFieldView from './TextFieldView';

export const TextFieldController = React.forwardRef((
  {
    value, setValue, className, placeholder,
  },
  ref,
) => {
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onClear = () => {
    setValue('');
  };

  return (
    <TextFieldView
      onChange={onChange}
      onClear={onClear}
      className={className}
      placeholder={placeholder}
      ref={ref}
      value={value}
    />
  );
});

export default TextFieldController;
