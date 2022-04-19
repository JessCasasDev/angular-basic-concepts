import { TestBed } from '@angular/core/testing';

import { DeactivateUserGuard } from './deactivate-user.guard';

describe('DeactivateUserGuard', () => {
  let guard: DeactivateUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivateUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
