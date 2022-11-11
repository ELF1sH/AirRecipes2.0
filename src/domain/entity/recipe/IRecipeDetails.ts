import { IRecipe } from './IRecipe';
import { Difficulty } from './Difficulty';

export interface IRecipeDetails extends IRecipe {
  images: string[],
  difficulty: Difficulty,
  ingredients: string[],
  instructions: string[],
}
