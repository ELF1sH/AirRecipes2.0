import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './slices/recipesListSlice';
import recipeDetailsReducer from './slices/recipeSlice';

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    recipeDetails: recipeDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
