import React from 'react';
import PropTypes from 'prop-types';

import ProgressCircleView from '../../defaultComponents/progressCircle/ProgressCircleView';

const WithLoader = (Component) => {
  const ComponentWithLoader = ({ curStatus, ...props }) => (curStatus === 'pending'
    ? <ProgressCircleView />
    : <Component {...props} />);

  ComponentWithLoader.propTypes = {
    curStatus: PropTypes.string.isRequired,
  };

  return ComponentWithLoader;
};

WithLoader.propTypes = {
  curStatus: PropTypes.string.isRequired,
};

export default WithLoader;
