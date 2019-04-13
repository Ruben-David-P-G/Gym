import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCaegoriaComponent } from './ver-caegoria.component';

describe('VerCaegoriaComponent', () => {
  let component: VerCaegoriaComponent;
  let fixture: ComponentFixture<VerCaegoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCaegoriaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCaegoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
