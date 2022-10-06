import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import ListView from './ListView';

const ListController = ({
  items, className, countBullet, header,
}) => {
  const getItemsWithIds = (array) => array.map((item, id) => ({ id, value: item }));

  const itemsWithIds = useMemo(() => getItemsWithIds(items), [items]);

  return (
    <ListView
      items={itemsWithIds}
      className={className}
      countBullet={countBullet}
      header={header}
    />
  );
};

ListController.defaultProps = {
  className: '',
  countBullet: false,
  header: '',
};

ListController.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  countBullet: PropTypes.bool,
  header: PropTypes.string,
};

export default ListController;
