import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  @Input()
  rowData = [];

  @Input()
  columnDefs = [];

  prop = '';
  orderBy = 'asc';

  constructor() { }

  ngOnInit(): void {
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
