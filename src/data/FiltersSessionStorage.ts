import { IFiltersRepository } from '../domain/repository/IFiltersRepository';
import { ICuisineFilter } from '../domain/entity/filter/ICuisineFilter';
import { IFilterState } from '../domain/entity/filter/IFilterState';
import { CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE } from './constants';

const CAL_RECIPES_KEY = 'calRecipes';
const CUISINES_FILTER_KEY = 'cuisinesFilter';
const NAME_FILTER_KEY = 'nameFilter';

export class FiltersSessionStorage implements IFiltersRepository {
  constructor() {
    this.setCalFilter([CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE]);
    this.setCuisinesFilter(null);
    this.setNameFilter('');
  }

  public setCalFilter(calRecipes: number[]) {
    sessionStorage.setItem(CAL_RECIPES_KEY, JSON.stringify(calRecipes));
  }

  public setCuisinesFilter(cuisinesFilter: ICuisineFilter[] | null) {
    sessionStorage.setItem(CUISINES_FILTER_KEY, JSON.stringify(cuisinesFilter));
  }

  public setNameFilter(nameFilter: string) {
    sessionStorage.setItem(NAME_FILTER_KEY, nameFilter);
  }

  private getCalFilter(): number[] {
    return JSON.parse(sessionStorage.getItem(CAL_RECIPES_KEY)!);
  }

  private getCuisinesFilter(): ICuisineFilter[] {
    return JSON.parse(sessionStorage.getItem(CUISINES_FILTER_KEY)!);
  }

  private getNameFilter(): string {
    return sessionStorage.getItem(NAME_FILTER_KEY)!;
  }

  public getFilterState(): IFilterState {
    return {
      calFilter: this.getCalFilter(),
      cuisinesFilter: this.getCuisinesFilter(),
      nameFilter: this.getNameFilter(),
    };
  }

  public resetFilterState(): void {
    this.setCalFilter([CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE]);

    const cuisinesFilter = this.getCuisinesFilter();
    if (cuisinesFilter) {
      const resetCuisinesFilter = cuisinesFilter.map((cuisineFilter) => (
        { ...cuisineFilter, status: true }
      ));

      this.setCuisinesFilter(resetCuisinesFilter);
    }
  }
}

export const filtersSessionStorage: IFiltersRepository = new FiltersSessionStorage();
