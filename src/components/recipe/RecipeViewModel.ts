import { RecipesMobxStore } from '../../domain/entity/recipe/RecipesMobxStore';
import { GetRecipeDetailsUseCase } from '../../domain/interactors/recipes/GetRecipeDetailsUseCase';

export class RecipeViewModel {
  private readonly store: RecipesMobxStore;

  constructor(recipesStore: RecipesMobxStore) {
    this.store = recipesStore;
  }

  public get recipeDetails() {
    return this.store.recipeDetails;
  }

  public fetchRecipeDetails = async (id: number) => {
    const getRecipeDetails = new GetRecipeDetailsUseCase(this.store);
    await getRecipeDetails.fetchRecipeDetails(id);
  };
}
