import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzallitasComponent } from './szallitas.component';

describe('SzallitasComponent', () => {
  let component: SzallitasComponent;
  let fixture: ComponentFixture<SzallitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzallitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzallitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
