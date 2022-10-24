import { RecipesMobxStore, recipesStore } from '../../domain/entity/recipe/RecipesMobxStore';

export interface RootStore {
  recipesStore: RecipesMobxStore,
}

export const initializeStore = (): RootStore => ({
  recipesStore,
});
