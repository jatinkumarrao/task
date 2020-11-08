import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Recipe}  from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
//@Output() item=new EventEmitter<void>()
  @Input() recipe:Recipe;
  constructor(private RecipeService: RecipeService) { }

  ngOnInit(): void {
  }
  selecteditem(){
 // this.item.emit();
 this.RecipeService.recipeSelected.emit(this.recipe)
  }
}
