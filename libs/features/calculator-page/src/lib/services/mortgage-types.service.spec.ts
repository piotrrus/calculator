import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { MortgageTypesService } from './mortgage-types.service';
import { provideHttpClient } from '@angular/common/http';

describe('MortgageTypesService', () => {
  let service: MortgageTypesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MortgageTypesService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(MortgageTypesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('should be call MortgageTypesService getClientEvents with get method', () => {
    service.getMortgageTypes(1).subscribe();
    const req = httpTestingController.expectOne(
      './assets/data/mortgage-types.json',
      'get mortgage-types api'
    );
    expect(req.request.method).toBe('GET');
  });

  it('should be call MortgageTypesService getMortgageTypes ', () => {
    const spy = spyOn(service, 'getMortgageTypes');
    service.getMortgageTypes(1);
    expect(spy).toHaveBeenCalled();
  });
});
