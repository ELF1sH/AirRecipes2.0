import React from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import styles from './styles/ErrorPage.module.scss';

interface ErrorPageViewProps {
  errorMessage: string;
}

const ErrorPageView: React.FC<ErrorPageViewProps> = ({ errorMessage }) => (
  <div className={styles.content_wrapper}>
    <Typography variant="h2">{errorMessage}</Typography>
    <br />
    <Link href="/">
      <Button variant="outlined" color="error">
        Back to home page
      </Button>
    </Link>
  </div>
);

export default ErrorPageView;
