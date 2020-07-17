import { TestBed } from '@angular/core/testing';

import { HansPreloadingStrategyService } from './hans-preloading-strategy.service';

describe('HansPreloadingStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HansPreloadingStrategyService = TestBed.get(HansPreloadingStrategyService);
    expect(service).toBeTruthy();
  });
});
