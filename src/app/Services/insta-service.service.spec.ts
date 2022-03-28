/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstaServiceService } from './insta-service.service';

describe('Service: InstaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstaServiceService]
    });
  });

  it('should ...', inject([InstaServiceService], (service: InstaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
