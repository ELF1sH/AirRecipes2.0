import React, { useMemo } from 'react';

import ListView from './ListView';
import { GetItemWithIdsType, ListItem } from './types';

interface ListControllerProps {
  items: string[],
  className?: string,
  countBullet?: boolean,
  header?: string,
}

const ListController: React.FC<ListControllerProps> = ({
  items, className = '', countBullet = false, header = '',
}) => {
  const getItemsWithIds: GetItemWithIdsType = (array: string[]) => array.map(
    (item: string, id: number) => ({ id, value: item }),
  );

  const itemsWithIds: ListItem[] = useMemo(() => getItemsWithIds(items), [items]);

  return (
    <ListView
      items={itemsWithIds}
      className={className}
      countBullet={countBullet}
      header={header}
    />
  );
};

export default ListController;
