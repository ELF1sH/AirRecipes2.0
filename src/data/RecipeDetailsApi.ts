import axios, { AxiosResponse } from 'axios';

import { IRecipeDetailsRepository } from '../domain/repository/IRecipeDetailsRepository';
import { IRecipeDetails } from '../domain/entity/recipe/IRecipeDetails';
import { RecipeDetailsResponse } from './types';

export class RecipeDetailsApi implements IRecipeDetailsRepository {
  public fetchRecipeDetails(id: number): Promise<IRecipeDetails> {
    return axios.get(
      `https://test.kode-t.ru/detail_${id}.json`,
    )
      .then((response: AxiosResponse<RecipeDetailsResponse>) => response.data.recipe);
  }
}

export const recipeDetailsApi: IRecipeDetailsRepository = new RecipeDetailsApi();
