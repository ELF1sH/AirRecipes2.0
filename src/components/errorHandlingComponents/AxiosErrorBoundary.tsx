import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

import ErrorPage from './errorPage/ErrorPageController';

const getErrorMessageByCode = (code?: number) => {
  switch (code) {
    case 404:
      return 'Page not found';
    case 500:
      return 'Internal server error';
    default:
      return 'Something went wrong';
  }
};

interface AxiosErrorBoundaryProps {
  children: React.ReactNode,
}

interface AxiosErrorBoundaryState {
  exists: boolean,
  error?: AxiosError,
}

export const AxiosErrorBoundary: React.FC<AxiosErrorBoundaryProps> = ({ children }) => {
  const [error, setError] = useState<AxiosErrorBoundaryState>(
    { exists: false } as AxiosErrorBoundaryState,
  );

  axios.interceptors.response.use(undefined, (axiosError: AxiosError) => {
    setError({
      exists: true,
      error: axiosError,
    });
    return Promise.reject(axiosError);
  });

  return (
    error.exists
      ? (
        <ErrorPage errorMessage={getErrorMessageByCode(error?.error?.response?.status)} />
      )
      : <>{children}</>
  );
};
