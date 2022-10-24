import { RecipesMobxStore } from '../../domain/entity/recipe/RecipesMobxStore';
import { GetRecipesUseCase } from '../../domain/interactors/recipes/GetRecipesUseCase';
import { IRecipe } from '../../domain/entity/recipe/IRecipe';

export class RecipesListViewModel {
  private readonly recipesStore: RecipesMobxStore;

  private readonly getRecipesUseCase: GetRecipesUseCase;

  constructor(recipesStore: RecipesMobxStore) {
    this.recipesStore = recipesStore;

    this.getRecipesUseCase = new GetRecipesUseCase(this.recipesStore);
  }

  public get recipes(): IRecipe[] | null {
    return this.recipesStore.filteredRecipes;
  }

  public fetchRecipes = async (): Promise<void> => {
    await this.getRecipesUseCase.fetchFilteredRecipes();
  };
}
