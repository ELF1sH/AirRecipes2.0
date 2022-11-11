import { IRecipeDetails } from '../domain/entity/recipe/IRecipeDetails';
import { IRecipe } from '../domain/entity/recipe/IRecipe';

export interface RecipeDetailsResponse {
  recipe: IRecipeDetails
}

export interface RecipesResponse {
  recipes: IRecipe[],
}
