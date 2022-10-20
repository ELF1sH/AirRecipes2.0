import { RecipeDetailsStateType, RecipeDetailsType } from '../../types/recipeTypes';
import { RecipeDetailsFetchParam, AsyncThunkConfigRecipeDetails } from '../../types/requestsTypes';
import { Status } from '../../types/recipesListTypes';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const fetchRecipeDetails = createAsyncThunk<
  RecipeDetailsType,
  RecipeDetailsFetchParam,
  AsyncThunkConfigRecipeDetails
>(
  'recipes/fetchRecipeDetails',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://test.kode-t.ru/detail_${id}.json`);
      return (await response.json()).recipe;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const recipeSlice = createSlice({
  name: 'recipeDetails',

  initialState: {
    recipeDetails: undefined,
    status: Status.PENDING,
    error: undefined,
  } as RecipeDetailsStateType,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchRecipeDetails.pending, (state: RecipeDetailsStateType) => {
      state.status = Status.PENDING;
      state.error = undefined;
    });

    builder.addCase(fetchRecipeDetails.fulfilled, (
      state: RecipeDetailsStateType,
      action: PayloadAction<RecipeDetailsType>,
    ) => {
      state.status = Status.RESOLVED;
      state.recipeDetails = action.payload;
    });

    builder.addCase(fetchRecipeDetails.rejected, (
      state: RecipeDetailsStateType,
      action: PayloadAction<string | undefined>,
    ) => {
      state.status = Status.REJECTED;
      state.error = action.payload;
    });
  },
});

export default recipeSlice.reducer;
