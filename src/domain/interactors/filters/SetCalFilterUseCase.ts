import { IFiltersRepository } from '../../repository/IFiltersRepository';
import { filtersSessionStorage } from '../../../data/FiltersSessionStorage';

export class SetCalFilterUseCase {
  private filtersRepository: IFiltersRepository = filtersSessionStorage;

  public setCalFilter(calFilter: number[]): void {
    this.filtersRepository.setCalFilter(calFilter);
  }
}

export const setCalFilterUseCase = new SetCalFilterUseCase();
