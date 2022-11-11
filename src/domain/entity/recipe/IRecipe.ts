import { ICuisine } from './ICuisine';

export interface IRecipe {
  id: number,
  title: string,
  description: string,
  caloricity: number,
  cookTime: number,
  thumbnail: string,
  cuisine: ICuisine,
}
