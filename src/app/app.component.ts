import { Component, HostListener } from '@angular/core';
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
  scrollPercentage:number=0;
  onScroll(scrollableDiv: HTMLElement): void {
    const scrollTop = scrollableDiv.scrollTop;
    const scrollHeight = scrollableDiv.scrollHeight;
    const clientHeight = scrollableDiv.clientHeight;

    this.scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  }
}
