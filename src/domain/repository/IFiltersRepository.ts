import { ICuisineFilter } from '../entity/filter/ICuisineFilter';
import { IFilterState } from '../entity/filter/IFilterState';

export interface IFiltersRepository {
  setCalFilter: (calRecipes: number[]) => void;

  setCuisinesFilter: (cuisinesFilter: ICuisineFilter[]) => void;

  setNameFilter: (nameFilter: string) => void;

  getFilterState: () => IFilterState;

  resetFilterState: () => void;
}
