import { RecipesStateType } from '../../types/recipes';

import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const CAL_SLIDER_MIN_VALUE = 100;
export const CAL_SLIDER_MAX_VALUE = 1200;

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes', // redux toolkit names actions the same way
  async (_, { rejectWithValue }) => {
    try {
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

const recipesListSlice = createSlice({
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
  } as RecipesStateType,
  reducers: {
    setNameFilter: (state, action) => {
      state.curFilterState.nameFilter = action.payload;
    },
    setCuisineFilter: (state, action) => {
      state.curFilterState.cuisineFilter = action.payload;
    },
    setCalFilter: (state, action) => {
      state.curFilterState.calFilter = action.payload;
    },
    clearFilter: (state) => {
      state.curFilterState.calFilter = [CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE];
      state.curFilterState.cuisineFilter = state.cuisines.map((item) => (
        { id: item.id, status: true }
      ));
    },
    resetCurFilterStateToPreviousState: (state) => {
      state.curFilterState = state.filterState;
    },
    applyFilter: (state) => {
      let recipes = current(state.initialRecipes);
      if (!recipes) return;
      state.filterState = state.curFilterState;

      if (state.filterState.nameFilter) {
        recipes = recipes.filter((x) => x.title.toUpperCase().includes(
          state.filterState.nameFilter.toUpperCase(),
        ));
      }

      recipes = recipes.filter((x) => x.caloricity >= state.filterState.calFilter[0]
        && x.caloricity <= state.filterState.calFilter[1]);

      const cuisinesIds = current(state.filterState).cuisineFilter
        .filter((x) => x.status)
        .map((x) => x.id);
      recipes = recipes.filter((x) => cuisinesIds.includes(x.cuisine.id));

      state.recipes = recipes;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.status = 'resolved';

      state.recipes = action.payload.recipes;
      state.initialRecipes = action.payload.recipes;

      state.cuisines = action.payload.recipes
        .map((recipe) => recipe.cuisine)
        .reduce((acc, cuisine) => ((acc.findIndex((x) => x.id === cuisine.id) === -1)
          ? [...acc, cuisine]
          : [...acc]), []);

      state.curFilterState.cuisineFilter = state.cuisines.map((item) => (
        { id: item.id, status: true }
      ));
      state.filterState.cuisineFilter = state.curFilterState.cuisineFilter;
    });
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    });
  },
  // extraReducers: {
  //   [fetchRecipes.pending]: (state) => {
  //     state.status = 'pending';
  //     state.error = null;
  //   },
  //   [fetchRecipes.fulfilled]: (state, action) => {
  //     state.status = 'resolved';
  //
  //     state.recipes = action.payload.recipes;
  //     state.initialRecipes = action.payload.recipes;
  //
  //     state.cuisines = action.payload.recipes
  //       .map((recipe) => recipe.cuisine)
  //       .reduce((acc, cuisine) => ((acc.findIndex((x) => x.id === cuisine.id) === -1)
  //         ? [...acc, cuisine]
  //         : [...acc]), []);
  //
  //     state.curFilterState.cuisineFilter = state.cuisines.map((item) => (
  //       { id: item.id, status: true }
  //     ));
  //     state.filterState.cuisineFilter = state.curFilterState.cuisineFilter;
  //   },
  //   [fetchRecipes.rejected]: (state, action) => {
  //     state.status = 'rejected';
  //     state.error = action.payload;
  //   },
  // },
});

export const {
  setNameFilter, setCuisineFilter, setCalFilter, clearFilter,
  applyFilter, resetCurFilterStateToPreviousState,
} = recipesListSlice.actions;
export default recipesListSlice.reducer;