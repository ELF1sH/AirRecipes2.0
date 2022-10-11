import React from 'react';
import PropTypes from 'prop-types';

import ProgressCircleView from '@defaultComponents/progressCircle/ProgressCircleView';

const WithLoader = (Component) => {
  const ComponentWithLoader = ({ curStatus, progressCircleClassname, ...props }) => (curStatus === 'pending'
    ? <ProgressCircleView className={progressCircleClassname} />
    : <Component {...props} />);

  ComponentWithLoader.defaultProps = {
    progressCircleClassname: '',
  };

  ComponentWithLoader.propTypes = {
    curStatus: PropTypes.string.isRequired,
    progressCircleClassname: PropTypes.string,
  };

  return ComponentWithLoader;
};

WithLoader.propTypes = {
  curStatus: PropTypes.string.isRequired,
};

export default WithLoader;
