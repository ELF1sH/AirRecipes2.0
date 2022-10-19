import React, { ChangeEvent } from 'react';

import styles from './styles/TextField.module.scss';
import searchIcon from '../../../assets/icons/search.svg';
import clearInputIcon from '../../../assets/icons/clearInput.svg';

interface TextFieldViewProps {
  className: string,
  placeholder: string,
  value: string,
  handleClear: () => void,
  handleChange?: (event : ChangeEvent<HTMLInputElement>) => void,
}

const TextFieldView = React.forwardRef((
  {
    handleChange,
    handleClear,
    className,
    placeholder,
    value,
  } : TextFieldViewProps,
  ref : React.RefObject<HTMLInputElement>,
) => (
  <div className={`${styles.input_wrapper} ${className}`}>
    <img src={searchIcon} className={styles.search_icon} alt="" draggable={false} />
    <input
      value={value}
      type="text"
      ref={ref}
      placeholder={placeholder}
      className={styles.input}
      onChange={handleChange}
    />
    {
      value.length > 0
        ? <img src={clearInputIcon} className={styles.clear_icon} alt="" draggable={false} onClick={handleClear} aria-hidden="true" />
        : ''
      }
  </div>
));

export default TextFieldView;
