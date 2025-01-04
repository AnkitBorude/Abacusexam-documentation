import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../models/apiinfo.model';
import { endpoints } from './endpoints.data';
@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class ApiEndpointService {

  constructor() {}

  getEndpointAt(index:number): ApiEndpoint  {
    return endpoints.at(index)!;
  }

  getMethodColor(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'): string {
    const colors: Record<'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', string> = {
      GET: 'green',
      POST: 'yellow',
      PUT: 'orange',
      DELETE: 'red',
      PATCH: 'purple'
    }
    return colors[method];
  }
}