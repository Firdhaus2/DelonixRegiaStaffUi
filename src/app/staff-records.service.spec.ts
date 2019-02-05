import { TestBed } from '@angular/core/testing';

import { StaffRecordsService } from './staff-records.service';

describe('StaffRecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffRecordsService = TestBed.get(StaffRecordsService);
    expect(service).toBeTruthy();
  });
});
