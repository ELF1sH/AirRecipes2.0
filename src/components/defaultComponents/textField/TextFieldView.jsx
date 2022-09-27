import React from 'react';
import styles from './styles/TextField.module.scss';
import searchIcon from '../../../assets/icons/search.svg';
import clearInputIcon from '../../../assets/icons/clear_input.svg';

const TextFieldView = React.forwardRef(({
  onChange, onClear, className, placeholder, value,
}, ref) => (
  <div className={`${styles.input_wrapper} ${className}`}>
    <img src={searchIcon} className={styles.search_icon} alt="" draggable={false} />
    <input
      className={styles.input}
      type="text"
      ref={ref}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
    {
        value.length > 0
          ? <img src={clearInputIcon} className={styles.clear_icon} alt="" draggable={false} onClick={onClear} />
          : ''
      }
  </div>
));

export default TextFieldView;
