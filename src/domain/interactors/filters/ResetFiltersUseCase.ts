import { IFiltersRepository } from '../../repository/IFiltersRepository';
import { filtersSessionStorage } from '../../../data/FiltersSessionStorage';

export class ResetFiltersUseCase {
  private filtersRepository: IFiltersRepository = filtersSessionStorage;

  public resetFilters(): void {
    this.filtersRepository.resetFilterState();
  }
}

export const resetFiltersUseCase = new ResetFiltersUseCase();
