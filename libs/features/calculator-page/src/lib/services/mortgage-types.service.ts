import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { RestResponse } from './rest-response.interface';

@Injectable()
export class MortgageTypesService extends ApiService {
  public getMortgageTypes(): Observable<RestResponse[]> {
    return this.get<RestResponse[]>('data/mortgage-types.json');
  }
}
