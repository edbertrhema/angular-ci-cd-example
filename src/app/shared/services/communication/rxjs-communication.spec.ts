import { TestBed } from '@angular/core/testing';

import { RxjsCommunication } from './rxjs-communication';

describe('RxjsCommunication', () => {
  let service: RxjsCommunication;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsCommunication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
