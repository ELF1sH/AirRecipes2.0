import { IFiltersRepository } from '../../repository/IFiltersRepository';
import { ICuisineFilter } from '../../entity/filter/ICuisineFilter';
import { filtersSessionStorage } from '../../../data/FiltersSessionStorage';

export class SetCuisineFilterUseCase {
  private filtersRepository: IFiltersRepository = filtersSessionStorage;

  public setCuisineFilter(cuisineFilter: ICuisineFilter[]): void {
    this.filtersRepository.setCuisinesFilter(cuisineFilter);
  }
}

export const setCuisineFilterUseCase = new SetCuisineFilterUseCase();
