import { Component, OnInit } from '@angular/core';
import { RecipesModule } from '../recipes.module';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipesModule[] = [
    new RecipesModule('A Test Recipe 1', 'This a simple test descripatopn for recipe',
      'https://cdn.pixabay.com/photo/2017/12/21/13/25/orange-3031789_960_720.jpg'),
    new RecipesModule('A Test Recipe 2', 'This a simple test descripatopn for recipe',
      'https://cdn.pixabay.com/photo/2017/12/21/13/25/orange-3031789_960_720.jpg')
    new RecipesModule('A Test Recipe 3', 'This a simple test descripatopn for recipe',
      'https://cdn.pixabay.com/photo/2017/12/21/13/25/orange-3031789_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
