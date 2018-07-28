import { Component, OnInit } from '@angular/core';
import { IngredientModule } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModule[] = [

    new IngredientModule('suagr', 23),
    new IngredientModule('floar', 45),
    new IngredientModule('water', 100)

  ];

  constructor() { }

  ngOnInit() {
  }

}
