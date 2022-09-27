import PropTypes from 'prop-types';
import { useRef } from 'react';
import FilterFormView from './FilterFormView';
import { recipesShape } from '../../models/propTypesObjects/Recipes';
import { CAL_SLIDER_MAX_VALUE, CAL_SLIDER_MIN_VALUE } from '../../models/store/slices/recipesListSlice';

function FilterFormController({ isModalOpened, setIsModalOpened, recipes }) {
  // const dispatch = useDispatch();

  const checkboxOnChange = (id) => {
    const prev = recipes.curFilterState.cuisineFilter.map((item) => ({ ...item }));
    prev.find((x) => x.id === id).status = !prev.find((x) => x.id === id).status;
    // dispatch(setCuisineFilter(prev));
  };

  const sliderRef = useRef(null);
  const sliderOnChange = () => {
    // dispatch(setCalFilter(sliderRef.current.getState()));
  };

  const btnApplyOnClick = () => {
    // dispatch(applyFilter());
    setIsModalOpened(false);
  };

  const isFilterChanged = () => {
    if (recipes.curFilterState.calFilter[0] !== CAL_SLIDER_MIN_VALUE) return true;
    if (recipes.curFilterState.calFilter[1] !== CAL_SLIDER_MAX_VALUE) return true;
    return !!recipes.curFilterState.cuisineFilter.find((item) => !item.status);
  };

  const handleClose = () => {
    setIsModalOpened(false);
    // dispatch(resetCurFilterStateToFilterState());
    // cause curFilter wasn't applied. That's why we need to reset it
  };

  return (
    <FilterFormView
      isModalOpened={isModalOpened}
      handleClose={handleClose}
      recipes={recipes}
      sliderOnChange={sliderOnChange}
      isFilterChanged={isFilterChanged}
      btnApplyOnClick={btnApplyOnClick}
      checkboxOnChange={checkboxOnChange}
      ref={sliderRef}
    />
  );
}

FilterFormController.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
  recipes: recipesShape.isRequired,
};

export default FilterFormController;
