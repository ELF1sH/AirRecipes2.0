import recipesReducer from './slices/recipesListSlice';
import recipeDetailsReducer from './slices/recipeSlice';

import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    recipeDetails: recipeDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
