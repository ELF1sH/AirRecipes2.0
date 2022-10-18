import { RecipeDetailsStateType, RecipeDetailsType } from '../../types/recipeDetails';
import { RecipeDetailsFetchParam, AsyncThunkConfigRecipeDetails } from '../../types/requestsTypes';

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
    recipeDetails: {},
    status: 'pending',
    error: null,
  } as RecipeDetailsStateType,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchRecipeDetails.pending, (state: RecipeDetailsStateType) => {
      state.status = 'pending';
      state.error = null;
    });

    builder.addCase(fetchRecipeDetails.fulfilled, (
      state: RecipeDetailsStateType,
      action: PayloadAction<RecipeDetailsType>,
    ) => {
      state.status = 'resolved';
      state.recipeDetails = action.payload;
    });

    builder.addCase(fetchRecipeDetails.rejected, (
      state: RecipeDetailsStateType,
      action: PayloadAction<string>,
    ) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export default recipeSlice.reducer;
