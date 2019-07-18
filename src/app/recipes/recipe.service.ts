import { Recipe } from '../models/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/09/11/massa-de-coxinha-receita.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 12)
      ]),
    new Recipe('Another test recipe', 'This is simply a test', 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/09/11/massa-de-coxinha-receita.jpg', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 4)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
