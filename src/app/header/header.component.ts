import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featureSelected=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onclickrecipe(feature:string){
  this.featureSelected.emit(feature);
  }
  onclickshopping(feature:string){
    this.featureSelected.emit(feature);
  }
}
