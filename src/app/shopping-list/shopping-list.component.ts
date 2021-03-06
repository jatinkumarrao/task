import { Component, OnInit } from '@angular/core';
import{Ingredient} from '../shared/ingredient.model';
import{ShoppingListService} from './shopping-list.service'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[]=[];
  constructor(private slservice:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.slservice.getingredient();
    this.slservice.ingrediantchange.subscribe((ingredient:Ingredient[])=>{
      this.ingredients=ingredient;
    })
  }
  servername(ingredient:Ingredient){
  this.ingredients.push(ingredient)
  }
}
