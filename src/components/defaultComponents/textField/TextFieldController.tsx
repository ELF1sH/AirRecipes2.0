import React, { useEffect, useState } from 'react';

import TextFieldView from './TextFieldView';

interface TextFieldControllerProps {
  value?: string,
  onChange?: (value: string) => void,
  className?: string,
  placeholder?: string,
}

const TextFieldController = React.forwardRef((
  {
    value = '',
    onChange = null,
    className = '',
    placeholder = '',
  } : TextFieldControllerProps,
  ref : React.RefObject<HTMLInputElement>,
) => {
  const [localValue, setLocalValue] = useState<string>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleClear = () => {
    setLocalValue('');
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

export default TextFieldController;
