import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibraryService } from '../library.service';
import { of } from 'rxjs';
import { stubLibraryData } from './test-double';
import { By } from '@angular/platform-browser';
import { DataGridComponent } from '../data-grid/data-grid.component';
import { DataSortingPipe } from '../data-sorting.pipe';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: LibraryService;
  let spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DashboardComponent, DataGridComponent, DataSortingPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LibraryService);
    spy = spyOn(service, 'getLibraryData').and.returnValue(of(stubLibraryData));
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
    expect(component.rowData.length).toBeGreaterThan(0);
  });

  it('should coulumns defined', () => {
    const columnDefs = [
      { displayName: 'Library Id', prop: 'id' },
      { displayName: 'Library Name', prop: 'name' },
      { displayName: 'Library Location', prop: 'location' },
      { displayName: 'Is Opened', prop: 'isOpened' },
    ];
    expect(component.columnDefs.length).toBe(4);
    expect(component.columnDefs).toEqual(columnDefs);
  });

  it('should have table headers', async(() => {
    fixture.whenRenderingDone().then(() => {
      const headers = fixture.debugElement.queryAll(By.css('th'));
      expect(headers[0].nativeElement.textContent).toBe('LIBRARY ID');
      expect(headers[1].nativeElement.textContent).toBe('LIBRARY NAME');
      expect(headers[2].nativeElement.textContent).toBe('LIBRARY LOCATION');
      expect(headers[3].nativeElement.textContent).toBe('IS OPENED');
    });
  }));
});
