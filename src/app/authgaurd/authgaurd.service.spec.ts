/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthgaurdService } from './authgaurd.service';

describe('AuthgaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthgaurdService]
    });
  });

  it('should ...', inject([AuthgaurdService], (service: AuthgaurdService) => {
    expect(service).toBeTruthy();
  }));
});
