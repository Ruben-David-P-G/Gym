import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCaegoriasComponent } from './reg-caegorias.component';

describe('RegCaegoriasComponent', () => {
  let component: RegCaegoriasComponent;
  let fixture: ComponentFixture<RegCaegoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCaegoriasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCaegoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
