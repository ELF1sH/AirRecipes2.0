import { IRecipeDetailsRepository } from '../../repository/IRecipeDetailsRepository';
import { recipeDetailsApi } from '../../../data/RecipeDetailsApi';
import { RecipesMobxStore } from '../../entity/recipe/RecipesMobxStore';

export class GetRecipeDetailsUseCase {
  private recipesStore: RecipesMobxStore;

  private recipeDetailsRepository: IRecipeDetailsRepository = recipeDetailsApi;

  constructor(recipesStore: RecipesMobxStore) {
    this.recipesStore = recipesStore;
  }

  public async fetchRecipeDetails(id: number) {
    this.recipesStore.clearRecipeDetails();

    const recipeDetails = await this.recipeDetailsRepository.fetchRecipeDetails(id);

    this.recipesStore.onFetchRecipeDetails(recipeDetails);
  }
}
