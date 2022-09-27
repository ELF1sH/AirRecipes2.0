import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FilterFormController from './FilterFormController';

function FilterFormProvider({ isModalOpened, setIsModalOpened }) {
  const recipes = useSelector((state) => state.recipes);
  console.log(recipes);
  return (
    <FilterFormController
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
      recipes={recipes}
    />
  );
}

FilterFormProvider.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
};

export default FilterFormProvider;
