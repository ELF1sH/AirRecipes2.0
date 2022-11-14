import { RecipesMobxStore, recipesStore } from '../../domain/entity/recipe/RecipesMobxStore';
import {
  PageElementsMobxStore,
  pageElementsMobxStore,
} from '../../domain/entity/pageElements/PageElementsMobxStore';

export interface RootStore {
  recipesStore: RecipesMobxStore,
  pageElementsRefsMobxStore: PageElementsMobxStore,
}

export const initializeStore = (): RootStore => ({
  recipesStore,
  pageElementsRefsMobxStore: pageElementsMobxStore,
});
