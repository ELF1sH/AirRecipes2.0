import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const CAL_SLIDER_MIN_VALUE = 100;
export const CAL_SLIDER_MAX_VALUE = 1200;

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes', // redux toolkit names actions the same way
  async (_, { rejectWithValue }) => {
    try {
      console.log('hello');
      const response = await fetch('https://test.kode-t.ru/list.json');
      if (!response.ok) {
        return Error('Server error');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    status: 'pending',
    error: null,

    initialRecipes: [],
    cuisines: [],

    filterState: {
      calFilter: [CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE],
      nameFilter: '',
      cuisineFilter: [],
    },
    curFilterState: {
      calFilter: [CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE],
      nameFilter: '',
      cuisineFilter: [],
    },
  },
  reducers: {
    setNameFilter: (state, action) => { state.curFilterState.nameFilter = action.payload; },
    setCuisineFilter: (state, action) => { state.curFilterState.cuisineFilter = action.payload; },
    setCalFilter: (state, action) => { state.curFilterState.calFilter = action.payload; },
    // eslint-disable-next-line no-unused-vars
    clearFilter: (state, action) => {
      state.curFilterState.calFilter = [CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE];
      // eslint-disable-next-line max-len
      state.curFilterState.cuisineFilter = state.cuisines.map((item) => ({ id: item.id, status: true }));
    },
    // eslint-disable-next-line no-unused-vars
    resetCurFilterStateToFilterState: (state, action) => {
      state.curFilterState = state.filterState;
    },
    // eslint-disable-next-line no-unused-vars
    applyFilter: (state, action) => {
      let { recipes } = current(state.initialRecipes);
      if (!recipes) return;
      state.filterState = state.curFilterState;

      if (state.filterState.nameFilter) {
        // eslint-disable-next-line max-len
        recipes = recipes.filter((x) => x.title.toUpperCase().includes(state.filterState.nameFilter.toUpperCase()));
      }

      // eslint-disable-next-line max-len
      recipes = recipes.filter((x) => x.caloricity >= state.filterState.calFilter[0] && x.caloricity <= state.filterState.calFilter[1]);

      // eslint-disable-next-line max-len
      const cuisinesIds = current(state.filterState).cuisineFilter.filter((x) => x.status).map((x) => x.id);
      recipes = recipes.filter((x) => cuisinesIds.includes(x.cuisine.id));

      state.recipes = { recipes };
    },
  },
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [fetchRecipes.pending]: (state, action) => {
      state.status = 'pending';
      state.error = null;
    },
    [fetchRecipes.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.recipes = action.payload;
      state.initialRecipes = state.recipes;
      // eslint-disable-next-line no-restricted-syntax
      for (const recipe of action.payload.recipes) {
        if (state.cuisines.findIndex((x) => x.id === recipe.cuisine.id) === -1) {
          state.cuisines.push(recipe.cuisine);
        }
      }
      // eslint-disable-next-line max-len
      state.curFilterState.cuisineFilter = state.cuisines.map((item) => ({ id: item.id, status: true }));
    },
    [fetchRecipes.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const {
  // eslint-disable-next-line max-len
  setNameFilter, setCuisineFilter, setCalFilter, clearFilter, applyFilter, resetCurFilterStateToFilterState,
} = recipesSlice.actions;
export default recipesSlice.reducer;
