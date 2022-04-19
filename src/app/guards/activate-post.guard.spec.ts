import { TestBed } from '@angular/core/testing';

import { ActivatePostGuard } from './activate-post.guard';

describe('ActivatePostGuard', () => {
  let guard: ActivatePostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivatePostGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
