import { TestBed } from '@angular/core/testing';

import { SnackDetailsService } from './snack-details.service';

describe('SnackDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnackDetailsService = TestBed.get(SnackDetailsService);
    expect(service).toBeTruthy();
  });
});
