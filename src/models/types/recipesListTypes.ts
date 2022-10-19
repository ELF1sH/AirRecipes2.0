export type Status = 'pending' | 'resolved' | 'rejected';

export interface CuisineType {
  id: number,
  title: string,
}

export interface CuisineFilter {
  id: number,
  status: boolean,
}

export interface RecipeType {
  id: number,
  title: string,
  description: string,
  caloricity: number,
  cookTime: number,
  cuisine: CuisineType,
  thumbnail: string,
}

export interface FilterType {
  calFilter: number[],
  cuisineFilter: CuisineFilter[],
  nameFilter: string,
}

export interface RecipesStateType {
  cuisines: CuisineType[],
  curFilterState: FilterType,
  filterState: FilterType,
  initialRecipes: RecipeType[],
  recipes: RecipeType[],
  error: undefined | string,
  status: Status,
}
