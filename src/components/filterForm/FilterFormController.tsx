import React, { useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';

import FilterFormView from './FilterFormView';
import { CuisineFilter, RecipesStateType } from '../../models/types/recipesListTypes';
import {
  applyFilter,
  CAL_SLIDER_MAX_VALUE,
  CAL_SLIDER_MIN_VALUE,
  clearFilter,
  resetCurFilterStateToPreviousState,
  setCalFilter,
  setCuisineFilter,
} from '../../models/store/slices/recipesListSlice';
import { GetStateHandle } from '../defaultComponents/textField/types';

interface FilterFormControllerProps {
  recipesState: RecipesStateType,
  isModalOpened: boolean,
  setIsModalOpened: (status: boolean) => void,
}

const FilterFormController: React.FC<FilterFormControllerProps> = ({
  isModalOpened,
  setIsModalOpened,
  recipesState,
}) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (id: number) => {
    if (!recipesState.curFilterState) return;

    const curState = structuredClone(recipesState.curFilterState.cuisineFilter);
    const changedCuisineFilter = curState.find((x: CuisineFilter) => x.id === id);
    if (!changedCuisineFilter) {
      throw new Error('Changed cuisine filter was not found');
    }
    changedCuisineFilter.status = !changedCuisineFilter.status;

    dispatch(setCuisineFilter(curState));
  };

  const sliderRef = useRef<GetStateHandle>(null);
  const handleSliderChange = () => {
    if (sliderRef.current) {
      dispatch(setCalFilter(sliderRef.current.getState()));
    }
  };

  const handleBtnApplyClick = () => {
    dispatch(applyFilter());
    setIsModalOpened(false);
  };

  const handleClearForm = () => {
    dispatch(clearFilter());
  };

  const getIsFilterChanged = () => {
    if (!recipesState.curFilterState) return false;

    if (recipesState.curFilterState.calFilter[0] !== CAL_SLIDER_MIN_VALUE) return true;
    if (recipesState.curFilterState.calFilter[1] !== CAL_SLIDER_MAX_VALUE) return true;
    return !!recipesState.curFilterState.cuisineFilter.find((item) => !item.status);
  };

  const isFilterChanged = useMemo(
    () => getIsFilterChanged(),
    [recipesState.curFilterState?.calFilter, recipesState.curFilterState?.cuisineFilter],
  );

  const handleClose = () => {
    setIsModalOpened(false);
    dispatch(resetCurFilterStateToPreviousState());
    // cause curFilter wasn't applied. That's why we need to reset it to previous state
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
