import React, {
  useEffect, useState, ChangeEvent,
} from 'react';

import TextFieldView from './TextFieldView';

interface TextFieldControllerProps {
  value?: string,
  className?: string,
  placeholder?: string,
  onChange?: (value: string) => void,
}

const TextFieldController = React.forwardRef((
  {
    value = '',
    className = '',
    placeholder = '',
    onChange,
  } : TextFieldControllerProps,
  ref : React.RefObject<HTMLInputElement>,
) => {
  const [localValue, setLocalValue] = useState<string>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleClear = () => {
    setLocalValue('');
    onChange?.('');
  };

  const localOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(event.target.value);
    onChange?.(event.target.value);
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
