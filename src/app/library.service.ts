import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Library } from './shared/model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private readonly BASE_URL = 'https://library-app-genpact-rested-otter-th.cfapps.io/api/';
  constructor(private http: HttpClient) {}

  getLibraryData = (): Observable<Library[]> => {
    return this.http.get<Library[]>(`${this.BASE_URL}library`);
  }
}
