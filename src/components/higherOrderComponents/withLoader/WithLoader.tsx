import React from 'react';

import ProgressCircleView from '../../defaultComponents/progressCircle/ProgressCircleView';
import { Status } from '../../../models/types/recipesListTypes';

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

export default WithLoader;
