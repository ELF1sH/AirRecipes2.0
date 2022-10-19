import { RecipeDetailsStateType } from './recipeTypes';
import { AppDispatch } from '../store';
import { RecipesStateType } from './recipesListTypes';

export interface RecipeDetailsFetchParam {
  id: number | string,
}

export interface AsyncThunkConfigRecipeDetails {
  /** return type for `thunkApi.getState` */
  state?: RecipeDetailsStateType
  /** type for `thunkApi.dispatch` */
  dispatch?: AppDispatch
  /** type to be passed into `rejectWithValue`'s first
   * argument that will end up on `rejectedAction.payload` */
  rejectValue: string
}

export interface AsyncThunkConfigRecipesList {
  /** return type for `thunkApi.getState` */
  state?: RecipesStateType
  /** type for `thunkApi.dispatch` */
  dispatch?: AppDispatch
  /** type to be passed into `rejectWithValue`'s first
   * argument that will end up on `rejectedAction.payload` */
  rejectValue: string
}
