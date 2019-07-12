import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  // Output
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/09/11/massa-de-coxinha-receita.jpg'),
    new Recipe('Another test recipe', 'This is simply a test', 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/09/11/massa-de-coxinha-receita.jpg')
  ];

  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
