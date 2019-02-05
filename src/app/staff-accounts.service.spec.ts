import { TestBed } from '@angular/core/testing';

import { StaffAccountsService } from './staff-accounts.service';

describe('StaffAccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffAccountsService = TestBed.get(StaffAccountsService);
    expect(service).toBeTruthy();
  });
});
