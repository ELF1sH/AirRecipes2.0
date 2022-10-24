import { IFiltersRepository } from '../../repository/IFiltersRepository';
import { filtersSessionStorage } from '../../../data/FiltersSessionStorage';
import { IFilterState } from '../../entity/filter/IFilterState';

export class GetFilterStateUseCase {
  private filtersRepository: IFiltersRepository = filtersSessionStorage;

  public getFilterState(): IFilterState {
    return this.filtersRepository.getFilterState();
  }
}

export const getFilterStateUseCase = new GetFilterStateUseCase();
