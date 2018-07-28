import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class IngredientModule {

  // public name: string;
  // public amount: number;

  constructor(public name: string, public amount: number) {

    // this.name = name;
    // this.amount = amount;
  }


}
