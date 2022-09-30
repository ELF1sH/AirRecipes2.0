import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import CuisinesFilterListView from './CuisinesFilterListView';
import { recipesShape } from '../../../../models/propTypesObjects/Recipes';

const CuisinesFilterListController = ({
  recipes, handleCheckboxChange,
  getCurCuisinesFiltersStatus,
}) => {
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
  recipes: recipesShape.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  getCurCuisinesFiltersStatus: PropTypes.func.isRequired,
};

export default CuisinesFilterListController;
