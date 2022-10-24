import { RecipesMobxStore } from '../../domain/entity/recipe/RecipesMobxStore';
import { ICuisine } from '../../domain/entity/recipe/ICuisine';
import { ApplyFiltersUseCase } from '../../domain/interactors/filters/ApplyFiltersUseCase';
import { ICuisineFilter } from '../../domain/entity/filter/ICuisineFilter';
import { IFilterState } from '../../domain/entity/filter/IFilterState';
import { setCuisineFilterUseCase } from '../../domain/interactors/filters/SetCuisineFilterUseCase';
import { getFilterStateUseCase } from '../../domain/interactors/filters/GetFilterStateUseCase';
import { resetFiltersUseCase } from '../../domain/interactors/filters/ResetFiltersUseCase';
import { setCalFilterUseCase } from '../../domain/interactors/filters/SetCalFilterUseCase';

export class FilterFormViewModel {
  private readonly store: RecipesMobxStore;

  private readonly applyFiltersUseCase: ApplyFiltersUseCase;

  constructor(recipesStore: RecipesMobxStore) {
    this.store = recipesStore;
    this.applyFiltersUseCase = new ApplyFiltersUseCase(this.store);
  }

  public get cuisines(): ICuisine[] | null {
    return this.store.cuisines;
  }

  public get filterState(): IFilterState {
    return getFilterStateUseCase.getFilterState();
  }

  public setCuisinesFilter = (cuisineFilter: ICuisineFilter[]): void => {
    setCuisineFilterUseCase.setCuisineFilter(cuisineFilter);
  };

  public setCalFilter = (calFilter: number[]): void => {
    setCalFilterUseCase.setCalFilter(calFilter);
  };

  public resetFilters = (): void => {
    resetFiltersUseCase.resetFilters();
  };

  public applyFilters = async (): Promise<void> => {
    await this.applyFiltersUseCase.applyFilters();
  };
}
