import React from 'react';

import { Typography } from '@mui/material';

import styles from './styles/List.module.scss';
import { ListItem } from './types';

interface ListViewProps {
  items: ListItem[],
  className: string,
  countBullet: boolean,
  header: string,
}

const ListView: React.FC<ListViewProps> = ({
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

export default ListView;
