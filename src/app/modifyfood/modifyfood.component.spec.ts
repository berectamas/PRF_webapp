import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyfoodComponent } from './modifyfood.component';

describe('ModifyfoodComponent', () => {
  let component: ModifyfoodComponent;
  let fixture: ComponentFixture<ModifyfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
