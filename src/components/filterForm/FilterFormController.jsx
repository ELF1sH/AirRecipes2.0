import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import FilterFormView from './FilterFormView';
import { recipesStateShape } from '../../models/propTypesObjects/recipes';
import {
  applyFilter,
  CAL_SLIDER_MAX_VALUE,
  CAL_SLIDER_MIN_VALUE,
  clearFilter,
  resetCurFilterStateToPreviousState,
  setCalFilter,
  setCuisineFilter,
} from '../../models/store/slices/recipesListSlice';

const FilterFormController = ({ isModalOpened, setIsModalOpened, recipes }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (id) => {
    const curState = structuredClone(recipes.curFilterState.cuisineFilter);
    const changedCuisineFilter = curState.find((x) => x.id === id);
    if (!changedCuisineFilter) {
      throw new Error('Changed cuisine filter was not found');
    }
    changedCuisineFilter.status = !changedCuisineFilter.status;
    dispatch(setCuisineFilter(curState));
  };

  const sliderRef = useRef(null);
  const handleSliderChange = () => {
    dispatch(setCalFilter(sliderRef.current.getState()));
  };

  const handleBtnApplyClick = () => {
    dispatch(applyFilter());
    setIsModalOpened(false);
  };

  const handleClearForm = () => {
    dispatch(clearFilter());
  };

  const getIsFilterChanged = () => {
    if (recipes.curFilterState.calFilter[0] !== CAL_SLIDER_MIN_VALUE) return true;
    if (recipes.curFilterState.calFilter[1] !== CAL_SLIDER_MAX_VALUE) return true;
    return !!recipes.curFilterState.cuisineFilter.find((item) => !item.status);
  };

  const isFilterChanged = useMemo(
    () => getIsFilterChanged(),
    [recipes.curFilterState.calFilter, recipes.curFilterState.cuisineFilter],
  );

  const handleClose = () => {
    setIsModalOpened(false);
    dispatch(resetCurFilterStateToPreviousState());
    // cause curFilter wasn't applied. That's why we need to reset it
  };

  return (
    <FilterFormView
      ref={sliderRef}
      isModalOpened={isModalOpened}
      recipes={recipes}
      isFilterChanged={isFilterChanged}
      handleClose={handleClose}
      handleBtnApplyClick={handleBtnApplyClick}
      handleClearForm={handleClearForm}
      handleCheckboxChange={handleCheckboxChange}
      handleSliderChange={handleSliderChange}
    />
  );
};

FilterFormController.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
  recipes: recipesStateShape.isRequired,
};

export default FilterFormController;
