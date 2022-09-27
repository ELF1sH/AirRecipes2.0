import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
import recipeDetailsReducer from './recipeDetailsSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    recipeDetails: recipeDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
