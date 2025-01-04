import { Component } from '@angular/core';
import { ApiEndpoint} from '../models/apiinfo.model';
import { ApiEndpointService } from '../services/apiendpoints.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-endpointinfo',
  templateUrl: './endpointinfo.component.html',
  styleUrl: './endpointinfo.component.css'
})
export class EndpointinfoComponent {

  endpoint:ApiEndpoint;
  id:number=0;

  constructor(public apiendpoints:ApiEndpointService,
    private route: ActivatedRoute
  ){
    this.endpoint=apiendpoints.getEndpointAt(0);
  }

  ngOnInit(): void {
    // Subscribe to route parameters
    this.route.params.subscribe(params => {
      this.id = params['index'];
      this.endpoint=this.apiendpoints.getEndpointAt(this.id);
    });
  }
  get title(): string {
    return `${this.endpoint?.method} ${this.endpoint?.url}`;
  }
 
}

