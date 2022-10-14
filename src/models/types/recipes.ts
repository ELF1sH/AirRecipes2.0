export type Status = 'pending' | 'resolved' | 'rejected';

export type CuisineType = {
  id: number,
  title: string,
}

export type CuisineFilter = {
  id: number,
  status: boolean,
}

export type RecipeType = {
  id: number,
  title: string,
  description: string,
  caloricity: number,
  cookTime: number,
  cuisine: CuisineType,
  thumbnail: string,
};

export type FilterType = {
  calFilter: number[],
  cuisineFilter: CuisineFilter[],
  nameFilter: string,
};

export type RecipesStateType = {
  cuisines?: CuisineType[],
  curFilterState?: FilterType,
  filterState?: FilterType,
  initialRecipes?: RecipeType[],
  recipes?: RecipeType[],
  error?: string,
  status?: Status,
};
