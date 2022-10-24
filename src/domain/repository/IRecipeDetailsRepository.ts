import { IRecipeDetails } from '../entity/recipe/IRecipeDetails';

export interface IRecipeDetailsRepository {
  fetchRecipeDetails: (id: number) => Promise<IRecipeDetails>;
}
