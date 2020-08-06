import { TestBed } from '@angular/core/testing';

import { LibraryService } from './library.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { stubLibraryData } from './dashboard/test-double';

describe('LibraryService', () => {
  let service: LibraryService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LibraryService],
    });
    service = TestBed.inject(LibraryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('shoud return todo data', () => {
    service.getLibraryData().subscribe((response: any[]) => {
      expect(response.length).toBe(5);
    });
    const req = httpMock.expectOne('https://library-app-genpact-rested-otter-th.cfapps.io/api/library');
    expect(req.request.method).toEqual('GET');
    req.flush(stubLibraryData);
  });
});
