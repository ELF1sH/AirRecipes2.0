import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

import styles from './styles/List.module.scss';

const ListView = ({
  items, className, countBullet, header,
}) => (
  <div className={className}>
    { header && <Typography variant="h3" sx={{ marginBottom: '16px' }}>{header}</Typography> }
    {
      !countBullet
        ? (
          <ul className={styles.ul}>
            {items.map((item) => (
              <li key={item.id}>
                <Typography variant="body1">{item.value}</Typography>
              </li>
            ))}
          </ul>
        )
        : (
          <ol className={styles.ol}>
            {items.map((item) => (
              <li key={item.id}>
                <Typography variant="body1">{item.value}</Typography>
              </li>
            ))}
          </ol>
        )
    }
  </div>
);

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  className: PropTypes.string.isRequired,
  countBullet: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
};

export default ListView;
