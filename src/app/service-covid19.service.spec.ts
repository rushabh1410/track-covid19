import { TestBed } from '@angular/core/testing';

import { ServiceCovid19Service } from './service-covid19.service';

describe('ServiceCovid19Service', () => {
  let service: ServiceCovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
