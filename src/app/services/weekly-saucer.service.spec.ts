import { TestBed } from '@angular/core/testing';

import { WeeklySaucerService } from './weekly-saucer.service';

describe('WeeklySaucerService', () => {
  let service: WeeklySaucerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklySaucerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
