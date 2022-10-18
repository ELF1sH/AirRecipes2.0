import { RecipeDetailsStateType } from './recipeDetails';
import { AppDispatch } from '../store';
import { RecipesStateType } from './recipes';

export type RecipeDetailsFetchParam = {
  id: number | string,
}

export type AsyncThunkConfigRecipeDetails = {
  /** return type for `thunkApi.getState` */
  state?: RecipeDetailsStateType
  /** type for `thunkApi.dispatch` */
  dispatch?: AppDispatch
  /** type to be passed into `rejectWithValue`'s first
   * argument that will end up on `rejectedAction.payload` */
  rejectValue: string
}

export type AsyncThunkConfigRecipesList = {
  /** return type for `thunkApi.getState` */
  state?: RecipesStateType
  /** type for `thunkApi.dispatch` */
  dispatch?: AppDispatch
  /** type to be passed into `rejectWithValue`'s first
   * argument that will end up on `rejectedAction.payload` */
  rejectValue: string
}
