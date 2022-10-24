import {
  action, computed, makeAutoObservable, observable,
  toJS,
} from 'mobx';

import { IRecipe } from './IRecipe';
import { IRecipeDetails } from './IRecipeDetails';
import { ICuisine } from './ICuisine';
import { IFilterState } from '../filter/IFilterState';

export class RecipesMobxStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable private _filteredRecipes: IRecipe[] | null = null;

  @observable private _recipeDetails: IRecipeDetails | null = null;

  @observable private _cuisines: ICuisine[] | null = null;

  public get filteredRecipes(): IRecipe[] | null {
    return toJS(this._filteredRecipes);
  }

  public get cuisines(): ICuisine[] | null {
    return toJS(this._cuisines);
  }

  public get recipeDetails(): IRecipeDetails | null {
    return toJS(this._recipeDetails);
  }

  @action public onFetchRecipes(recipes: IRecipe[], filters?: IFilterState): void {
    this._cuisines = this.getUniqueCuisines(recipes);

    if (filters) {
      const { nameFilter, cuisinesFilter, calFilter } = filters;

      if (nameFilter) {
        recipes = recipes.filter(({ title }) => title.toUpperCase().includes(
          nameFilter.toUpperCase(),
        ));
      }

      if (cuisinesFilter) {
        const cuisinesIds = cuisinesFilter
          .filter(({ status }) => status)
          .map(({ id }) => id);

        recipes = recipes.filter(({ cuisine }) => cuisinesIds.includes(cuisine.id));
      }

      if (calFilter) {
        recipes = recipes.filter(({ caloricity }) => caloricity >= calFilter[0]
          && caloricity <= calFilter[1]);
      }
    }

    this._filteredRecipes = recipes;
  }

  @action public clearRecipeDetails(): void {
    this._recipeDetails = null;
  }

  @action public onFetchRecipeDetails(recipeDetails: IRecipeDetails): void {
    this._recipeDetails = recipeDetails;
  }

  @computed private getUniqueCuisines(recipes: IRecipe[]): ICuisine[] {
    return recipes
      .map((recipe: IRecipe) => recipe.cuisine)
      .reduce((acc: ICuisine[], cuisine: ICuisine) => (
        (acc.findIndex(({ id }) => id === cuisine.id) === -1)
          ? [...acc, cuisine]
          : [...acc]
      ), []);
  }
}

export const recipesStore = new RecipesMobxStore();
