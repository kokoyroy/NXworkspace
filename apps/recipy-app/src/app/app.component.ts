import { Component } from '@angular/core';
import { featureType } from './components/Header/header.component';

@Component({
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedFeature: featureType = 'recipy';


  onNavigate(event:featureType) {
    this.loadedFeature = event;
  }
}
