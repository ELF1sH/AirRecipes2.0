import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/TextField.module.scss';
import searchIcon from '../../../assets/icons/search.svg';
import clearInputIcon from '../../../assets/icons/clearInput.svg';

const TextFieldView = React.forwardRef(({
  handleChange, handleClear, className, placeholder, value,
}, ref) => (
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

TextFieldView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextFieldView;
