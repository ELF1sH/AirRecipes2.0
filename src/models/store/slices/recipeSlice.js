import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRecipeDetails = createAsyncThunk(
  'recipes/fetchRecipeDetails', // redux toolkit names actions the same way
  async ({ id }, { rejectWithValue }) => {
    // TODO: DON'T FORGET TO GET RID OF THIS
    const sleep = (time) => new Promise((r) => { setTimeout(r, time); });

    try {
      await sleep(2000);
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
  },
  reducers: {},
  extraReducers: {
    [fetchRecipeDetails.pending]: (state) => {
      state.status = 'pending';
      state.error = null;
    },
    [fetchRecipeDetails.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.recipeDetails = action.payload.recipe;
    },
    [fetchRecipeDetails.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default recipeSlice.reducer;
