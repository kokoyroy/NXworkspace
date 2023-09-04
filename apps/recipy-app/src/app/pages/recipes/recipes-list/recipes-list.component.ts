import { Component, EventEmitter, Output } from '@angular/core';
import { IRecipy, Recipy } from '@org/models';

@Component({
  selector: 'org-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {

  @Output() recipySelected = new EventEmitter<IRecipy>()
  recipes: Array<IRecipy> = [
    new Recipy('a test recipy', 'this is a simple recipy', 'https://www.eatingwell.com/thmb/YxkWBfh2AvNYrDKoHukRdmRvD5U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg')
  ]

  emitRecipy(recipy: IRecipy) {
    this.recipySelected.emit(recipy) 
  }

}
