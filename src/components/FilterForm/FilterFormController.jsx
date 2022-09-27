import FilterFormView from './FilterFormView';

function FilterFormController() {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const checkboxOnChange = (id) => {
    const prev = recipes.curFilterState.cuisineFilter.map((item) => ({ ...item }));
    prev.find((x) => x.id === id).status = !prev.find((x) => x.id === id).status;
    dispatch(setCuisineFilter(prev));
  };

  const sliderRef = useRef();
  const sliderOnChange = () => {
    dispatch(setCalFilter(sliderRef.current.getState()));
  };

  const btnApplyOnClick = () => {
    dispatch(applyFilter());
    props.setIsModalOpened(false);
  };

  const isFilterChanged = () => {
    if (recipes.curFilterState.calFilter[0] !== CAL_SLIDER_MIN_VALUE) return true;
    if (recipes.curFilterState.calFilter[1] !== CAL_SLIDER_MAX_VALUE) return true;
    for (const item of recipes.curFilterState.cuisineFilter) {
      if (item.status === false) return true;
    }
    return false;
  };

  const handleClose = () => {
    props.setIsModalOpened(false);
    dispatch(resetCurFilterStateToFilterState()); // cause curFilter wasn't applied. That's why we need to reset it
  };

  return (
    <FilterFormView />
  );
}

export default FilterFormController;
