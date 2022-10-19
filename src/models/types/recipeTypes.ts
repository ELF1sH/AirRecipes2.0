import { CuisineType, Status } from './recipesListTypes';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface RecipeDetailsType {
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
}

export interface RecipeDetailsStateType {
  recipeDetails?: RecipeDetailsType,
  error: undefined | string,
  status: Status,
}
