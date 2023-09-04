import { Component } from '@angular/core';
import { IRecipy } from '@org/models';

@Component({
  selector: 'org-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
 selectedRecipy:IRecipy | undefined;

 

}
