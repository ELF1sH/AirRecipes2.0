import React from 'react';
import PropTypes from 'prop-types';

import ProgressCircleView from '../../defaultComponents/progressCircle/ProgressCircleView';
import { Status } from '../../../models/types/recipes';

interface ComponentWithLoaderProps {
  curStatus: Status,
  progressCircleClassname?: string,
  [key: string]: any,
}

const WithLoader = (Component: React.ComponentType) => {
  const ComponentWithLoader: React.FC<ComponentWithLoaderProps> = ({
    curStatus,
    progressCircleClassname = '',
    ...props
  }) => (curStatus === 'pending'
    ? <ProgressCircleView className={progressCircleClassname} />
    : <Component {...props} />);

  return ComponentWithLoader;
};

WithLoader.propTypes = {
  curStatus: PropTypes.string.isRequired,
};

export default WithLoader;
