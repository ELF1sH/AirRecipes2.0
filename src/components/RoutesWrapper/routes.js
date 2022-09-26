import RecipesListProvider from "../RecipesList/RecipesListProvider";
import RecipeProvider from "../Recipe/RecipeProvider";

export const routes = [
  {
    id: 1,
    path: '/',
    element: <RecipesListProvider />,
  },
  {
    id: 2,
    path: 'recipe/:recipeId',
    element: <RecipeProvider />,
  },
];
