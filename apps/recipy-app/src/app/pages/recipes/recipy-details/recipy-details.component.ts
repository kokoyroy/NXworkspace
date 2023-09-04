import { Component, Input } from '@angular/core';
import { IRecipy } from '@org/models';

@Component({
  selector: 'org-recipy-details',
  templateUrl: './recipy-details.component.html',
  styleUrls: ['./recipy-details.component.scss'],
})
export class RecipyDetailsComponent {
@Input() recipy: IRecipy | undefined;

}
