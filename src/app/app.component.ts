import { Component, HostListener, inject } from '@angular/core';
import { ApiEndpointService } from './services/apiendpoints.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor(public apiEndpointsservice:ApiEndpointService){

  }
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
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
