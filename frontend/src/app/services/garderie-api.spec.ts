import { TestBed } from '@angular/core/testing';
import { GarderieApi } from './garderie-api';

describe('GarderieApi', () => {
  let service: GarderieApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarderieApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
