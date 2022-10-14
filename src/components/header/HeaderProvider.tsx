import React from 'react';

import HeaderController from './HeaderController';

interface HeaderProviderProps {
  isFixed?: boolean,
}

const HeaderProvider: React.FC<HeaderProviderProps> = ({ isFixed = false }) => (
  <HeaderController isFixed={isFixed} />
);

export default HeaderProvider;
