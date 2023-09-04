import { Component } from '@angular/core';
import { IIngredient, Ingredient } from '@org/models';

@Component({
  selector: 'org-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: Array<IIngredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];


  // constructor() {}
}
