import {Ingredient} from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';
export class ShoppingListService{
    ingrediantchange= new EventEmitter<Ingredient[]>();
  private  ingredients: Ingredient[]=[
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes',10)
      ];
    getingredient(){
        return this.ingredients.slice();
    }
    addingrediant(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingrediantchange.emit(this.ingredients.slice())
    }
    addmoreingredient(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingrediantchange.emit(this.ingredients.slice())
    }
}