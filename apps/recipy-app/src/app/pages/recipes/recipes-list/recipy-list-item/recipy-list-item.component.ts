import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRecipy } from '@org/models';

@Component({
  selector: 'org-recipy-list-item',
  templateUrl: './recipy-list-item.component.html',
  styleUrls: ['./recipy-list-item.component.scss'],
})
export class RecipyListItemComponent {
  @Input() recipy?: IRecipy
  @Output() recipySelected = new EventEmitter<IRecipy>()
  
  onRecipySelected(recipy: IRecipy) {
    this.recipySelected.emit(recipy)
  }

}
