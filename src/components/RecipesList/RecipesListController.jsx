import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RecipesListView from './RecipesListView';
import { fetchRecipes } from '../../models/store/recipesSlice';

// TODO: point out structure
// eslint-disable-next-line react/prop-types
function RecipesListController({ recipesState }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (!recipesState.recipes.recipes) {
      dispatch(fetchRecipes());
      // dispatch(applyFilter());
    }
  }, []);

  return (
    <RecipesListView />
  );
}

export default RecipesListController;
