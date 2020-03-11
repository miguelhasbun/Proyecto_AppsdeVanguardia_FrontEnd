import { TestBed } from '@angular/core/testing';

import { DdataService } from './ddata.service';

describe('DdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DdataService = TestBed.get(DdataService);
    expect(service).toBeTruthy();
  });
});
