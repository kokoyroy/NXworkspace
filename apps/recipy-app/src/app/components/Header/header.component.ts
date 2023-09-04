import { Component, EventEmitter, Output } from '@angular/core';

export type featureType = 'recipy' | 'shopping-list';

@Component({
  selector: 'org-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<featureType>();



  onSelect(action: featureType) {
    this.featureSelected.emit(action)

  }
}
