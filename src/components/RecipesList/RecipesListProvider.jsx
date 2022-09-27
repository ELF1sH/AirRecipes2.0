import { useSelector } from 'react-redux';
import RecipesListController from './RecipesListController';

function RecipesListProvider() {
  const recipesState = useSelector((state) => state.recipes);

  return (
    <RecipesListController recipesState={recipesState} />
  );
}

export default RecipesListProvider;
