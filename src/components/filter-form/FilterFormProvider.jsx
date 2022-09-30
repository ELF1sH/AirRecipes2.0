import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FilterFormController from './FilterFormController';

const FilterFormProvider = ({ isModalOpened, setIsModalOpened }) => {
  const recipes = useSelector((state) => state.recipes);
  return (
    <FilterFormController
      recipes={recipes}
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
