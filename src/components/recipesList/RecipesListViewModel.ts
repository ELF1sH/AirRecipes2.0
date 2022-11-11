import { RecipesMobxStore } from '../../domain/entity/recipe/RecipesMobxStore';
import { GetRecipesUseCase } from '../../domain/interactors/recipes/GetRecipesUseCase';
import { IRecipe } from '../../domain/entity/recipe/IRecipe';

export class RecipesListViewModel {
  private readonly store: RecipesMobxStore;

  private readonly getRecipesUseCase: GetRecipesUseCase;

  constructor(recipesStore: RecipesMobxStore) {
    this.store = recipesStore;
    this.getRecipesUseCase = new GetRecipesUseCase(this.store);
  }

  public get recipes(): IRecipe[] | null {
    return this.store.filteredRecipes;
  }

  public fetchRecipes = async (): Promise<void> => {
    await this.getRecipesUseCase.fetchFilteredRecipes();
  };
}
