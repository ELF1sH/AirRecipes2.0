import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/MainContainer.module.scss';

const MainContainer = ({ children }) => (
  <div className={styles.main_wrapper}>
    {children}
  </div>
);

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
