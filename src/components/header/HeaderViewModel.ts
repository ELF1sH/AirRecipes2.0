import { RecipesMobxStore } from '../../domain/entity/recipe/RecipesMobxStore';
import { setNameFilterUseCase } from '../../domain/interactors/filters/SetNameFilterUseCase';
import { ApplyFiltersUseCase } from '../../domain/interactors/filters/ApplyFiltersUseCase';

export class HeaderViewModel {
  private readonly store: RecipesMobxStore;

  private readonly applyFiltersUseCase: ApplyFiltersUseCase;

  constructor(recipesStore: RecipesMobxStore) {
    this.store = recipesStore;
    this.applyFiltersUseCase = new ApplyFiltersUseCase(this.store);
  }

  public setNameFilter(nameFilter: string): void {
    setNameFilterUseCase.setNameFilter(nameFilter);
  }

  public applyFilters = async (): Promise<void> => {
    await this.applyFiltersUseCase.applyFilters();
  };
}
