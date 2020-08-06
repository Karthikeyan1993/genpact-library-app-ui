import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book, Column } from '../shared/model';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
})
export class BookViewComponent implements OnInit {
  libraryId;
  books: Book[] = [];
  columnDefs: Column[] = [];
  prop = '';
  orderBy = 'asc';
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.initColumnDef();
    this.route.paramMap.subscribe((ele) => {
      this.libraryId = ele.get('id');
      this.getBooksByLibraryId(this.libraryId);
    });
  }

  getBooksByLibraryId = (id) => {
    this.bookService.getBooksByLibraryId(id).subscribe((res) => {
      this.books = res;
    });
  }

  private initColumnDef = (): void => {
    this.columnDefs = [
      { displayName: 'Id', prop: 'id' },
      { displayName: 'Isbn', prop: 'isbn' },
      { displayName: 'Title', prop: 'title' },
      { displayName: 'Sub Title', prop: 'subtitle' },
      { displayName: 'Author', prop: 'author' },
      { displayName: 'Publisher', prop: 'publisher' },
      { displayName: 'Pages', prop: 'pages' },
    ];
  }

  doOrder = (prop: string): void => {
    this.prop = prop;
    this.orderBy = this.orderBy === 'asc' ? 'desc' : 'asc';
  }

  getClass = (prop: string) => {
    return {
      'fa-sort': prop !== this.prop,
      'fa-caret-up': prop === this.prop && this.orderBy === 'asc',
      'fa-caret-down': prop === this.prop && this.orderBy === 'desc',
    };
  }
}
