import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './shared/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly BASE_URL = 'https://library-app-genpact-rested-otter-th.cfapps.io/api/';
  constructor(private http: HttpClient) {}

  getBooksByLibraryId = (id: number): Observable<Book[]> => {
    return this.http.get<Book[]>(`${this.BASE_URL}libraries/${id}/books`);
  }
}
