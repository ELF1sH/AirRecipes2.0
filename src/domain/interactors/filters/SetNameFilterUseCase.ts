import { filtersSessionStorage } from '../../../data/FiltersSessionStorage';
import { IFiltersRepository } from '../../repository/IFiltersRepository';

export class SetNameFilterUseCase {
  private filtersRepository: IFiltersRepository = filtersSessionStorage;

  public setNameFilter(nameFilter: string): void {
    this.filtersRepository.setNameFilter(nameFilter);
  }
}

export const setNameFilterUseCase = new SetNameFilterUseCase();
