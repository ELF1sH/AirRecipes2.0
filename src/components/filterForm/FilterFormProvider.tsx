import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import FilterFormController from './FilterFormController';
import { RootState } from '../../models/store';

const FilterFormProvider = ({ isModalOpened, setIsModalOpened }) => {
  const recipesState = useSelector<RootState>((state) => state.recipes);
  return (
    <FilterFormController
      recipesState={recipesState}
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
    />
  );
};

FilterFormProvider.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
};

export default FilterFormProvider;
