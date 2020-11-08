import { Component, OnInit,Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //@Output() serverCreated=new EventEmitter<{name:string, amount:string}>();
 @ViewChild('addNewname') addNewname:ElementRef;
 @ViewChild('addNewAmount') addNewAmount:ElementRef;
 
  // addNewname="";
  // addNewAmount="";
  constructor(private slservice:ShoppingListService) { }

  ngOnInit(): void {
  }
  addnewitem(){
    console.log(this.addNewname)
    console.log(this.addNewAmount)
    //this.serverCreated.emit({
      
   const name=this.addNewname.nativeElement.value;
    const amount=this.addNewAmount.nativeElement.value;
    const newIngredient=new Ingredient(name,amount)
    this.slservice.addingrediant(newIngredient)

    //    })
  }

}
