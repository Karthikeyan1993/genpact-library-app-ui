import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Library, Column } from '../shared/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  rowData: Library[] = [];
  columnDefs: Column[] = [];

  constructor(private service: LibraryService) {}

  ngOnInit(): void {
    this.init();
  }

  private init = () => {
    this.initColumnDef();
    this.getLibraryData();
  }

  private initColumnDef = (): void => {
    this.columnDefs = [
      { displayName: 'Library Id', prop: 'id' },
      { displayName: 'Library Name', prop: 'name' },
      { displayName: 'Library Location', prop: 'location' },
      { displayName: 'Is Opened', prop: 'isOpened' },
    ];
  }

  private getLibraryData = () => {
    this.service.getLibraryData().subscribe(
      (response) => {
        this.rowData = response;
      },
      () => {
        console.log('error');
      }
    );
  }
}
