import axios, { AxiosResponse } from 'axios';

import { IRecipesListRepository } from '../domain/repository/IRecipesListRepository';
import { IRecipe } from '../domain/entity/recipe/IRecipe';
import { RecipesResponse } from './types';

export class RecipesListApi implements IRecipesListRepository {
  public fetchRecipes(): Promise<IRecipe[]> {
    return axios.get(
      'https://test.kode-t.ru/list.json',
    )
      .then((response: AxiosResponse<RecipesResponse>) => response.data.recipes);
  }
}

export const recipesListApi: IRecipesListRepository = new RecipesListApi();
