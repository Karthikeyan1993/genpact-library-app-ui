import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewComponent } from './book-view.component';
import { DataSortingPipe } from '../data-sorting.pipe';
import { BookService } from '../book.service';
import { stubBooksData } from './test-double';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('BookViewComponent', () => {
  let component: BookViewComponent;
  let fixture: ComponentFixture<BookViewComponent>;
  let service: BookService;
  let spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      declarations: [BookViewComponent, DataSortingPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(BookService);
    spy = spyOn(service, 'getBooksByLibraryId').and.returnValue(
      of(stubBooksData)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service getLibraryData method', () => {
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
  });

  it('should have library data length', () => {
    expect(component.books.length).toBeGreaterThan(0);
  });

  it('should coulumns defined', () => {
    const columnDefs = [
      { displayName: 'Id', prop: 'id' },
      { displayName: 'Isbn', prop: 'isbn' },
      { displayName: 'Title', prop: 'title' },
      { displayName: 'Sub Title', prop: 'subtitle' },
      { displayName: 'Author', prop: 'author' },
      { displayName: 'Publisher', prop: 'publisher' },
      { displayName: 'Pages', prop: 'pages' },
    ];
    expect(component.columnDefs.length).toBe(7);
    expect(component.columnDefs).toEqual(columnDefs);
  });

  it('should have table headers', async(() => {
    fixture.whenRenderingDone().then(() => {
      const headers = fixture.debugElement.queryAll(By.css('th'));
      expect(headers[0].nativeElement.textContent).toBe('ID');
      expect(headers[1].nativeElement.textContent).toBe('ISBN');
      expect(headers[2].nativeElement.textContent).toBe('TITLE');
      expect(headers[3].nativeElement.textContent).toBe('SUB TITLE');
      expect(headers[4].nativeElement.textContent).toBe('AUTHOR');
      expect(headers[5].nativeElement.textContent).toBe('PUBLISHER');
      expect(headers[6].nativeElement.textContent).toBe('PAGES');
    });
  }));
});
