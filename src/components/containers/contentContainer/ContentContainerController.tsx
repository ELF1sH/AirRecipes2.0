import React, { useRef, useEffect } from 'react';

import { ContentContainerViewModel } from './ContentContainerViewModel';
import styles from './styles/ContentContainer.module.scss';

interface ContentContainerControllerProps {
  children: React.ReactElement,
  viewModel: ContentContainerViewModel,
}

export const ContentContainerController: React.FC<ContentContainerControllerProps> = ({
  children,
  viewModel,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current !== null) {
      viewModel.setContentContainer(containerRef.current);
    }
  }, [containerRef.current]);

  return (
    <div ref={containerRef} className={styles.content_container}>
      {children}
    </div>
  );
};
