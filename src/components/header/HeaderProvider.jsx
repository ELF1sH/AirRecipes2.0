import React from 'react';
import PropTypes from 'prop-types';

import HeaderController from './HeaderController';

const HeaderProvider = ({ isFixed }) => (
  <HeaderController isFixed={isFixed} />
);

HeaderProvider.defaultProps = {
  isFixed: false,
};

HeaderProvider.propTypes = {
  isFixed: PropTypes.bool,
};

export default HeaderProvider;
