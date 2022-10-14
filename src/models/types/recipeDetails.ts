import { CuisineType, Status } from './recipes';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type RecipeDetailsType = {
  id: number,
  caloricity: number,
  cookTime: number,
  cuisine: CuisineType,
  description: string,
  difficulty: Difficulty,
  images: string[],
  ingredients: string[],
  instructions: string[],
  thumbnail: string,
  title: string,
};

export type RecipeDetailsStateType = {
  recipeDetails: RecipeDetailsType,
  error: string,
  status: Status,
};
