import { useDispatch } from 'react-redux';

import recipesReducer from './slices/recipesListSlice';
import recipeDetailsReducer from './slices/recipeSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    recipeDetails: recipeDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
