import { RecipesMobxStore } from '../../domain/entity/recipe/RecipesMobxStore';
import { setNameFilterUseCase } from '../../domain/interactors/filters/SetNameFilterUseCase';
import { ApplyFiltersUseCase } from '../../domain/interactors/filters/ApplyFiltersUseCase';
import { PageElementsMobxStore } from '../../domain/entity/pageElements/PageElementsMobxStore';

export class HeaderViewModel {
  private readonly recipesStore: RecipesMobxStore;

  private readonly pageElementsStore: PageElementsMobxStore;

  private readonly applyFiltersUseCase: ApplyFiltersUseCase;

  constructor(recipesStore: RecipesMobxStore, pageElementsStore: PageElementsMobxStore) {
    this.recipesStore = recipesStore;
    this.pageElementsStore = pageElementsStore;

    this.applyFiltersUseCase = new ApplyFiltersUseCase(this.recipesStore);
  }

  public setNameFilter(nameFilter: string): void {
    setNameFilterUseCase.setNameFilter(nameFilter);
  }

  public applyFilters = async (): Promise<void> => {
    await this.applyFiltersUseCase.applyFilters();
  };

  public get contentContainer(): HTMLDivElement | null {
    return this.pageElementsStore.contentContainer;
  }
}
