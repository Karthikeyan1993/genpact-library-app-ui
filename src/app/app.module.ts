import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { BookViewComponent } from './book-view/book-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataSortingPipe } from './data-sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataGridComponent,
    BookViewComponent,
    NavBarComponent,
    DataSortingPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
