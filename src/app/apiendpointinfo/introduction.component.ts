import { Component, HostListener, Input } from '@angular/core';
import { Parameter,ApiEndpoint,StatusCode } from '../models/apiinfo.model';
import { ApiEndpointService } from '../services/apiendpoints.service';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {

  endpoint:ApiEndpoint;
  constructor(public apiendpoints:ApiEndpointService)
  {
    this.endpoint=apiendpoints.getEndpointAt(0);
     
  }

  get title(): string {
    return `${this.endpoint?.method} ${this.endpoint?.url}`;
  }
}
