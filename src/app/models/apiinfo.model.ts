interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface StatusCode {
  code: number;
  type: string;
  description: string;
}

interface ApiEndpoint {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  description: string;
  pathParams?: Parameter[];
  queryParams?: Parameter[];
  headerParams: Parameter[];
  requestBody?: any;
  responseBody?: any;
  successCodes: StatusCode[];
  errorCodes: StatusCode[];
}

export {Parameter,StatusCode,ApiEndpoint};