import { TestBed } from '@angular/core/testing';

import { ServiceProjectService } from './service-project.service';

describe('ServiceProjectService', () => {
  let service: ServiceProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
