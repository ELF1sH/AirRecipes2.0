import React from 'react';
import { useSelector } from 'react-redux';

import FilterFormController from './FilterFormController';
import { RootState } from '../../models/store';
import { RecipesStateType } from '../../models/types/recipes';

interface FilterFormProviderProps {
  isModalOpened: boolean,
  setIsModalOpened: (value: boolean) => void,
}

const FilterFormProvider: React.FC<FilterFormProviderProps> = ({
  isModalOpened,
  setIsModalOpened,
}) => {
  const recipesState = useSelector<RootState>((state) => state.recipes) as RecipesStateType;

  return (
    <FilterFormController
      recipesState={recipesState}
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
    />
  );
};

export default FilterFormProvider;
