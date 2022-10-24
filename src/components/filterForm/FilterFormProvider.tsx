import React from 'react';

import FilterFormController from './FilterFormController';
import { FilterFormViewModel } from './FilterFormViewModel';
import { useStore } from '../rootMobxStore/StoreProvider';

interface FilterFormProviderProps {
  isModalOpened: boolean,
  setIsModalOpened: (value: boolean) => void,
}

const FilterFormProvider: React.FC<FilterFormProviderProps> = ({
  isModalOpened,
  setIsModalOpened,
}) => {
  const { recipesStore } = useStore();
  const viewModel = new FilterFormViewModel(recipesStore);

  return (
    <FilterFormController
      viewModel={viewModel}
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
    />
  );
};

export default FilterFormProvider;
