import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let dl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    dl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have brand title', async(() => {
    expect(dl.query(By.css('.navbar-text')).nativeElement.textContent).toEqual('Genpact e-Tool');
  }));
});
