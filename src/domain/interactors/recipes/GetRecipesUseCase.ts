import { IRecipesListRepository } from '../../repository/IRecipesListRepository';
import { recipesListApi } from '../../../data/RecipesListApi';
import { RecipesMobxStore } from '../../entity/recipe/RecipesMobxStore';
import { IFilterState } from '../../entity/filter/IFilterState';

export class GetRecipesUseCase {
  private recipesListRepository: IRecipesListRepository = recipesListApi;

  private recipesStore: RecipesMobxStore;

  constructor(recipesStore: RecipesMobxStore) {
    this.recipesStore = recipesStore;
  }

  public async fetchFilteredRecipes(filters?: IFilterState): Promise<void> {
    const recipes = await this.recipesListRepository.fetchRecipes();

    this.recipesStore.onFetchRecipes(recipes, filters);
  }
}
