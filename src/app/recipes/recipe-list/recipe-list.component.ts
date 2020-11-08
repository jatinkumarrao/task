import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import{RecipeService} from '../recipe.service'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
//@Output() RecipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes=this.RecipeService.getRecipies();
  }
//   onRecipeSelected(recipe:Recipe){
// this.RecipeWasSelected.emit(recipe);

//   }
}
