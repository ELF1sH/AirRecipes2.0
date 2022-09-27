import PropTypes from 'prop-types';
import { useRef } from 'react';
import FilterFormView from './FilterFormView';

// TODO: dispatch them from global state later
const CAL_SLIDER_MIN_VALUE = 100;
const CAL_SLIDER_MAX_VALUE = 1000;

function FilterFormController({ isModalOpened, setIsModalOpened, recipes }) {
  console.log(recipes);
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
    // eslint-disable-next-line consistent-return
    recipes.curFilterState.cuisineFilter.forEach((item) => {
      if (item.status === false) return true;
    });
    return false;
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
      CAL_SLIDER_MIN_VALUE={CAL_SLIDER_MIN_VALUE}
      CAL_SLIDER_MAX_VALUE={CAL_SLIDER_MAX_VALUE}
      ref={sliderRef}
    />
  );
}

FilterFormController.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
  // TODO: write recipes structure
  // eslint-disable-next-line react/forbid-prop-types
  recipes: PropTypes.object.isRequired,
};

export default FilterFormController;
