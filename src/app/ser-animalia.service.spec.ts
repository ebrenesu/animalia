import { TestBed } from '@angular/core/testing';

import { SerAnimaliaService } from './ser-animalia.service';

describe('SerAnimaliaService', () => {
  let service: SerAnimaliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerAnimaliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
