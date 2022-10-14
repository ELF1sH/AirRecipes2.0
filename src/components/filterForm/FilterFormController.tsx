import React, { useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';

import FilterFormView from './FilterFormView';
import { RecipesStateType } from '../../models/types/recipes';
import {
  applyFilter,
  CAL_SLIDER_MAX_VALUE,
  CAL_SLIDER_MIN_VALUE,
  clearFilter,
  resetCurFilterStateToPreviousState,
  setCalFilter,
  setCuisineFilter,
} from '../../models/store/slices/recipesListSlice';

interface FilterFormControllerProps {
  isModalOpened: boolean,
  setIsModalOpened: (status: boolean) => void,
  recipesState: RecipesStateType,
}

const FilterFormController: React.FC<FilterFormControllerProps> = ({
  isModalOpened,
  setIsModalOpened,
  recipesState,
}) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (id) => {
    const curState = structuredClone(recipesState.curFilterState.cuisineFilter);
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
    if (recipesState.curFilterState.calFilter[0] !== CAL_SLIDER_MIN_VALUE) return true;
    if (recipesState.curFilterState.calFilter[1] !== CAL_SLIDER_MAX_VALUE) return true;
    return !!recipesState.curFilterState.cuisineFilter.find((item) => !item.status);
  };

  const isFilterChanged = useMemo(
    () => getIsFilterChanged(),
    [recipesState.curFilterState.calFilter, recipesState.curFilterState.cuisineFilter],
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
      recipesState={recipesState}
      isFilterChanged={isFilterChanged}
      handleClose={handleClose}
      handleBtnApplyClick={handleBtnApplyClick}
      handleClearForm={handleClearForm}
      handleCheckboxChange={handleCheckboxChange}
      handleSliderChange={handleSliderChange}
    />
  );
};

export default FilterFormController;
