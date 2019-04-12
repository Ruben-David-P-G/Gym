import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesAdminPage } from './sucursales-admin.page';

describe('SucursalesAdminPage', () => {
  let component: SucursalesAdminPage;
  let fixture: ComponentFixture<SucursalesAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalesAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalesAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
