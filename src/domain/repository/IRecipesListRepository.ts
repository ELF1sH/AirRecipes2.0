import { IRecipe } from '../entity/recipe/IRecipe';

export interface IRecipesListRepository {
  fetchRecipes: () => Promise<IRecipe[]>;
}
