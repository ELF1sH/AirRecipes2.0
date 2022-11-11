import { RecipesMobxStore } from '../../domain/entity/recipe/RecipesMobxStore';
import { GetRecipeDetailsUseCase } from '../../domain/interactors/recipes/GetRecipeDetailsUseCase';
import { IRecipeDetails } from '../../domain/entity/recipe/IRecipeDetails';

export class RecipeViewModel {
  private readonly store: RecipesMobxStore;

  constructor(recipesStore: RecipesMobxStore) {
    this.store = recipesStore;
  }

  public get recipeDetails(): IRecipeDetails | null {
    return this.store.recipeDetails;
  }

  public fetchRecipeDetails = async (id: number): Promise<void> => {
    const getRecipeDetails = new GetRecipeDetailsUseCase(this.store);
    await getRecipeDetails.fetchRecipeDetails(id);
  };
}
