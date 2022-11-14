import { RecipesMobxStore } from '../../domain/entity/recipe/RecipesMobxStore';
import { GetRecipeDetailsUseCase } from '../../domain/interactors/recipes/GetRecipeDetailsUseCase';
import { IRecipeDetails } from '../../domain/entity/recipe/IRecipeDetails';
import { GetRecipesUseCase } from '../../domain/interactors/recipes/GetRecipesUseCase';

export class RecipeViewModel {
  private readonly store: RecipesMobxStore;

  private readonly getRecipesUseCase: GetRecipesUseCase;

  constructor(recipesStore: RecipesMobxStore) {
    this.store = recipesStore;

    this.getRecipesUseCase = new GetRecipesUseCase(this.store);
  }

  public get recipeDetails(): IRecipeDetails | null {
    return this.store.recipeDetails;
  }

  public fetchRecipeDetails = async (id: number): Promise<void> => {
    const getRecipeDetails = new GetRecipeDetailsUseCase(this.store);
    await getRecipeDetails.fetchRecipeDetails(id);
  };

  public fetchRecipes = async (): Promise<void> => {
    await this.getRecipesUseCase.fetchFilteredRecipes();
  };
}
