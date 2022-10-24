import React from 'react';

import HeaderController from './HeaderController';
import { HeaderViewModel } from './HeaderViewModel';
import { useStore } from '../rootMobxStore/StoreProvider';

interface HeaderProviderProps {
  isFixed?: boolean,
}

const HeaderProvider: React.FC<HeaderProviderProps> = ({ isFixed = false }) => {
  const { recipesStore } = useStore();
  const viewModel = new HeaderViewModel(recipesStore!);

  return (
    <HeaderController isFixed={isFixed} viewModel={viewModel} />
  );
};

export default HeaderProvider;
