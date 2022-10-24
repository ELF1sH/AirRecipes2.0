import React, { useMemo } from 'react';

import CuisinesFilterListView from './CuisinesFilterListView';
import { CuisineFilterStatus } from './types';
import { ICuisine } from '../../../../domain/entity/recipe/ICuisine';
import { ICuisineFilter } from '../../../../domain/entity/filter/ICuisineFilter';

interface CuisinesFilterListControllerProps {
  cuisines: ICuisine[],
  cuisinesFilter: ICuisineFilter[] | null,
  handleCheckboxChange: (id: number) => void,
}

const CuisinesFilterListController: React.FC<CuisinesFilterListControllerProps> = ({
  cuisines,
  cuisinesFilter,
  handleCheckboxChange,
}) => {
  const curCuisinesFiltersStatus: CuisineFilterStatus | undefined = useMemo(
    () => cuisinesFilter?.reduce((acc, item) => ({ ...acc, [item.id]: item.status }), {}),
    [cuisinesFilter],
  );

  return (
    <CuisinesFilterListView
      cuisines={cuisines}
      handleCheckboxChange={handleCheckboxChange}
      curCuisinesFiltersStatus={curCuisinesFiltersStatus}
    />
  );
};

export default CuisinesFilterListController;
