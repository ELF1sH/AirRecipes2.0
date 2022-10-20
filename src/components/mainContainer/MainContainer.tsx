import React from 'react';

import styles from './styles/MainContainer.module.scss';

interface MainContainerProps {
  children: React.ReactNode
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => (
  <div className={styles.main_wrapper}>
    {children}
  </div>
);

export default MainContainer;
