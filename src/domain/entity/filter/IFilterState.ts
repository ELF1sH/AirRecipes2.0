import { ICuisineFilter } from './ICuisineFilter';

export interface IFilterState {
  calFilter: number[],
  cuisinesFilter: ICuisineFilter[],
  nameFilter: string,
}
