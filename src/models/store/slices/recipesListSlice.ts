import {
  CuisineFilter, CuisineType, RecipesStateType, RecipeType, Status,
} from '../../types/recipesListTypes';
import { AsyncThunkConfigRecipesList } from '../../types/requestsTypes';

import {
  createAsyncThunk, createSlice, current, PayloadAction,
} from '@reduxjs/toolkit';

export const CAL_SLIDER_MIN_VALUE = 100;
export const CAL_SLIDER_MAX_VALUE = 1200;

export const fetchRecipes = createAsyncThunk<RecipeType[], undefined, AsyncThunkConfigRecipesList>(
  'recipes/fetchRecipes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://test.kode-t.ru/list.json');
      if (!response.ok) {
        return Error('Server error');
      }
      return (await response.json()).recipes;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const recipesListSlice = createSlice({
  name: 'recipes',

  initialState: {
    recipes: [],
    status: Status.PENDING,
    error: undefined,

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
    setNameFilter: (state: RecipesStateType, action: PayloadAction<string>) => {
      state.curFilterState.nameFilter = action.payload;
    },
    setCuisineFilter: (state: RecipesStateType, action: PayloadAction<CuisineFilter[]>) => {
      state.curFilterState.cuisineFilter = action.payload;
    },
    setCalFilter: (state: RecipesStateType, action: PayloadAction<number[]>) => {
      state.curFilterState.calFilter = action.payload;
    },
    clearFilter: (state: RecipesStateType) => {
      state.curFilterState.calFilter = [CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE];
      state.curFilterState.cuisineFilter = state.cuisines.map((item) => (
        { id: item.id, status: true }
      ));
    },
    resetCurFilterStateToPreviousState: (state: RecipesStateType) => {
      state.curFilterState = state.filterState;
    },
    applyFilter: (state: RecipesStateType) => {
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
    builder.addCase(fetchRecipes.pending, (state: RecipesStateType) => {
      state.status = Status.PENDING;
      state.error = undefined;
    });

    builder.addCase(fetchRecipes.fulfilled, (
      state: RecipesStateType,
      action: PayloadAction<RecipeType[]>,
    ) => {
      state.status = Status.RESOLVED;

      state.recipes = action.payload;
      state.initialRecipes = action.payload;

      state.cuisines = action.payload
        .map((recipe) => recipe.cuisine)
        .reduce((acc: CuisineType[], cuisine: CuisineType) => (
          (acc.findIndex((x: CuisineType) => x.id === cuisine.id) === -1)
            ? [...acc, cuisine]
            : [...acc]
        ), []);

      state.curFilterState.cuisineFilter = state.cuisines.map((item) => (
        { id: item.id, status: true }
      ));
      state.filterState.cuisineFilter = state.curFilterState.cuisineFilter;
    });

    builder.addCase(fetchRecipes.rejected, (
      state: RecipesStateType,
      action: PayloadAction<string | undefined>,
    ) => {
      state.status = Status.REJECTED;
      state.error = action.payload;
    });
  },
});

export const {
  setNameFilter, setCuisineFilter, setCalFilter, clearFilter,
  applyFilter, resetCurFilterStateToPreviousState,
} = recipesListSlice.actions;
export default recipesListSlice.reducer;
