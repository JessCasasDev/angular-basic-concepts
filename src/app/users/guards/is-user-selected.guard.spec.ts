import { TestBed } from '@angular/core/testing';

import { IsUserSelectedGuard } from './is-user-selected.guard';

describe('IsUserSelectedGuard', () => {
  let guard: IsUserSelectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsUserSelectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
