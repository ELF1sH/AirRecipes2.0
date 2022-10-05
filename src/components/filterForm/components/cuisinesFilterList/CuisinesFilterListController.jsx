import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import CuisinesFilterListView from './CuisinesFilterListView';
import { recipesStateShape } from '../../../../models/propTypesObjects/Recipes';

const CuisinesFilterListController = ({ recipes, handleCheckboxChange }) => {
  const getCurCuisinesFiltersStatus = () => (
    recipes.curFilterState.cuisineFilter.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.status }),
      {},
    )
  );

  const curCuisinesFiltersStatus = useMemo(
    () => getCurCuisinesFiltersStatus(),
    [recipes.curFilterState.cuisineFilter],
  );

  return (
    <CuisinesFilterListView
      handleCheckboxChange={handleCheckboxChange}
      recipes={recipes}
      curCuisinesFiltersStatus={curCuisinesFiltersStatus}
    />
  );
};

CuisinesFilterListController.propTypes = {
  recipes: recipesStateShape.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default CuisinesFilterListController;
