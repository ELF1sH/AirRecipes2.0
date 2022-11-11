import React from 'react';

import { useStore } from '../../rootMobxStore/StoreProvider';
import { ContentContainerViewModel } from './ContentContainerViewModel';
import { ContentContainerController } from './ContentContainerController';

interface ContentContainerProviderProps {
  children: React.ReactElement,
}

const ContentContainerProvider: React.FC<ContentContainerProviderProps> = ({ children }) => {
  const { pageElementsRefsMobxStore } = useStore();

  const viewModel = new ContentContainerViewModel(pageElementsRefsMobxStore);

  return (
    <ContentContainerController viewModel={viewModel}>
      {children}
    </ContentContainerController>
  );
};

export default ContentContainerProvider;
