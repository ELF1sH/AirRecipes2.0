import { filtersSessionStorage } from '../../../data/FiltersSessionStorage';
import { IFiltersRepository } from '../../repository/IFiltersRepository';
import { GetRecipesUseCase } from '../recipes/GetRecipesUseCase';
import { RecipesMobxStore } from '../../entity/recipe/RecipesMobxStore';
import { IFilterState } from '../../entity/filter/IFilterState';

export class ApplyFiltersUseCase {
  private readonly recipesStore: RecipesMobxStore;

  private getRecipesUseCase: GetRecipesUseCase;

  constructor(recipesStore: RecipesMobxStore) {
    this.recipesStore = recipesStore;

    this.getRecipesUseCase = new GetRecipesUseCase(this.recipesStore);
  }

  private filtersRepository: IFiltersRepository = filtersSessionStorage;

  public async applyFilters() {
    const filters: IFilterState = this.filtersRepository.getFilterState();

    await this.getRecipesUseCase.fetchFilteredRecipes(filters);
  }
}
