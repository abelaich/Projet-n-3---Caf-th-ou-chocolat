import { TestBed } from '@angular/core/testing';

import { DrinkRepositoryDummyImplService } from './drink-repository-dummy-impl.service';

describe('DrinkRepositoryDummyImplService', () => {
  let service: DrinkRepositoryDummyImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkRepositoryDummyImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
