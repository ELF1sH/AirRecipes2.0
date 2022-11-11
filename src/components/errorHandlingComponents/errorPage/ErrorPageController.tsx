import React from 'react';

import ErrorPageView from './ErrorPageView';

interface ErrorPageControllerProps {
  errorMessage?: string;
}

const ErrorPageController: React.FC<ErrorPageControllerProps> = ({ errorMessage = 'Page not found' }) => (
  <ErrorPageView
    errorMessage={errorMessage}
  />
);

export default ErrorPageController;
