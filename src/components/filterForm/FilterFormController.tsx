import React, {
  useEffect, useMemo, useReducer,
} from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import FilterFormView from './FilterFormView';
import { FilterFormViewModel } from './FilterFormViewModel';
import { ICuisineFilter } from '../../domain/entity/filter/ICuisineFilter';
import { CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE } from '../../data/constants';
import { getDefaultCuisinesFilter } from './helpers/getDefaultCuisinesFilter';
import {
  Action,
  ActionUpdateFilters,
  FilterFormControllerState,
  ActionType,
  UpdateFiltersPayload,
  ActionUpdateCaloricFilter,
  ActionUpdateCuisinesFilter,
  UpdateCaloricFilterPayload,
  UpdateCuisinesFilterPayload,
} from './types';

interface FilterFormControllerProps {
  viewModel: FilterFormViewModel,
  isModalOpened: boolean,
  setIsModalOpened: (status: boolean) => void,
}

const getUpdateFiltersAction = (
  filters: UpdateFiltersPayload,
): ActionUpdateFilters => ({
  type: ActionType.UPDATE_FILTERS,
  payload: filters,
});

const getUpdateCaloricFilterAction = (
  caloricFilter: UpdateCaloricFilterPayload,
): ActionUpdateCaloricFilter => ({
  type: ActionType.UPDATE_CALORIC_FILTER,
  payload: caloricFilter,
});

const getUpdateCuisinesFilterAction = (
  cuisinesFilter: UpdateCuisinesFilterPayload,
): ActionUpdateCuisinesFilter => ({
  type: ActionType.UPDATE_CUISINES_FILTER,
  payload: cuisinesFilter,
});

const initialState: FilterFormControllerState = {
  caloricFilter: [],
  cuisinesFilter: [],
};

const reducer = (state: FilterFormControllerState, action: Action): FilterFormControllerState => {
  switch (action.type) {
    case ActionType.UPDATE_FILTERS:
      return {
        ...state,
        caloricFilter: (action as ActionUpdateFilters).payload.caloricFilter,
        cuisinesFilter: (action as ActionUpdateFilters).payload.cuisinesFilter,
      };

    case ActionType.UPDATE_CALORIC_FILTER:
      return {
        ...state,
        caloricFilter: (action as ActionUpdateCaloricFilter).payload,
      };

    case ActionType.UPDATE_CUISINES_FILTER:
      return {
        ...state,
        cuisinesFilter: (action as ActionUpdateCuisinesFilter).payload,
      };

    default:
      throw new Error('Action type does not exist');
  }
};

const FilterFormController: React.FC<FilterFormControllerProps> = ({
  viewModel,
  isModalOpened,
  setIsModalOpened,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const {
    cuisines, setCuisinesFilter, setCalFilter, resetFilters, applyFilters,
  } = viewModel;

  const actualizeLocalState = () => {
    const { filterState } = viewModel;

    dispatch(getUpdateFiltersAction({
      caloricFilter: filterState.calFilter,
      cuisinesFilter: filterState.cuisinesFilter || getDefaultCuisinesFilter(cuisines),
    }));
  };

  useEffect(() => {
    actualizeLocalState();
  }, [cuisines]);

  const handleCheckboxChange = (id: number) => {
    const newCuisinesFilter = structuredClone(state.cuisinesFilter);
    const cuisineFilter = newCuisinesFilter.find((x: ICuisineFilter) => x.id === id);

    if (!cuisineFilter) {
      throw new Error('Changed cuisine filter was not found');
    }

    cuisineFilter.status = !cuisineFilter.status;

    dispatch(getUpdateCuisinesFilterAction(newCuisinesFilter));
  };

  const handleSliderChange = (newValue: number[]) => {
    dispatch(getUpdateCaloricFilterAction(newValue));
  };

  const handleBtnApplyClick = () => {
    setCuisinesFilter(state.cuisinesFilter);
    setCalFilter(state.caloricFilter);

    (async () => {
      await applyFilters();
    })();

    setIsModalOpened(false);

    navigate('/');
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && isModalOpened) {
      handleBtnApplyClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isModalOpened, state.cuisinesFilter, state.caloricFilter]);

  const handleClearForm = () => {
    resetFilters();

    (async () => {
      await applyFilters();
    })();

    setIsModalOpened(false);

    navigate('/');
  };

  const handleClose = () => {
    actualizeLocalState();

    setIsModalOpened(false);
  };

  const isFilterChanged = useMemo(
    () => (
      !!(state.cuisinesFilter.find(({ status }) => !status)
      || state.caloricFilter[0] !== CAL_SLIDER_MIN_VALUE
      || state.caloricFilter[1] !== CAL_SLIDER_MAX_VALUE)
    ),
    [state.cuisinesFilter, state.caloricFilter],
  );

  return (
    <FilterFormView
      cuisines={cuisines || []}
      cuisinesFilter={state.cuisinesFilter}
      sliderValue={state.caloricFilter}
      isModalOpened={isModalOpened}
      isFilterChanged={isFilterChanged}
      handleClose={handleClose}
      handleBtnApplyClick={handleBtnApplyClick}
      handleClearForm={handleClearForm}
      handleCheckboxChange={handleCheckboxChange}
      handleSliderChange={handleSliderChange}
    />
  );
};

export default observer(FilterFormController);
