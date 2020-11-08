import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected =new EventEmitter<Recipe>();
    private  recipes: Recipe[] =  [
    new Recipe('A Test Recipe',
     'This is simply a test', 
     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
     [
         new Ingredient('Meat',1),
         new Ingredient('French fries',20)
        ]),
    new Recipe('A 2Test Recipe', 'This is simply a test', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
        new Ingredient('Meat',1),
        new Ingredient('Buns',20)
    ])
    ]
    constructor(private slservice:ShoppingListService){
    }
   getRecipies(){
    return this.recipes.slice();
   } 
   getIngredient(ingredient:Ingredient[]){
   this.slservice.addmoreingredient(ingredient);
   }
}