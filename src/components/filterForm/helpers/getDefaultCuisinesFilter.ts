import { ICuisine } from '../../../domain/entity/recipe/ICuisine';
import { ICuisineFilter } from '../../../domain/entity/filter/ICuisineFilter';

export const getDefaultCuisinesFilter = (cuisines: ICuisine[] | null): ICuisineFilter[] => (
  cuisines
    ? cuisines.map((item) => (
      { id: item.id, status: true }))
    : []);
