import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { stubBooksData } from './book-view/test-double';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud return todo data', () => {
    service.getBooksByLibraryId(1).subscribe((response: any[]) => {
      expect(response.length).toBe(2);
    });
    const req = httpMock.expectOne(
      'https://library-app-genpact-rested-otter-th.cfapps.io/api/libraries/1/books'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(stubBooksData);
  });
});
