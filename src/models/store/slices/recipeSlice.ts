import { RecipeDetailsStateType } from '../../types/recipeDetails';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type fetchParam = {
  id: number | string,
}

export const fetchRecipeDetails = createAsyncThunk(
  'recipes/fetchRecipeDetails', // redux toolkit names actions the same way
  async ({ id }: fetchParam, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://test.kode-t.ru/detail_${id}.json`);
      if (!response.ok) {
        return Error('Server error');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
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
    builder.addCase(fetchRecipeDetails.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchRecipeDetails.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.recipeDetails = action.payload.recipe;
    });
    builder.addCase(fetchRecipeDetails.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    });
  },
});

export default recipeSlice.reducer;
