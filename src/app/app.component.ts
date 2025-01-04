import { Component } from '@angular/core';
import { ApiEndpointService } from './services/apiendpoints.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public apiEndpointsservice:ApiEndpointService){
    
  }
  isCollapsed = false;
  theme:Boolean=true;
}
