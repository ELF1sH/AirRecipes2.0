import React, { useMemo } from 'react';

import CuisinesFilterListView from './CuisinesFilterListView';
import { RecipesStateType } from '../../../../models/types/recipesListTypes';
import { CuisineFilterStatus } from './types';

interface CuisinesFilterListControllerProps {
  recipesState: RecipesStateType,
  handleCheckboxChange: (id: number) => void,
}

const CuisinesFilterListController: React.FC<CuisinesFilterListControllerProps> = ({
  recipesState,
  handleCheckboxChange,
}) => {
  const getCurCuisinesFiltersStatus = () => (
    recipesState.curFilterState?.cuisineFilter.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.status }),
      {},
    )
  );

  const curCuisinesFiltersStatus: CuisineFilterStatus | undefined = useMemo(
    () => getCurCuisinesFiltersStatus(),
    [recipesState?.curFilterState?.cuisineFilter],
  );

  return (
    <CuisinesFilterListView
      handleCheckboxChange={handleCheckboxChange}
      recipesState={recipesState}
      curCuisinesFiltersStatus={curCuisinesFiltersStatus}
    />
  );
};

export default CuisinesFilterListController;
