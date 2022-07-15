import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornoActivoComponent } from './retorno-activo.component';

describe('RetornoActivoComponent', () => {
  let component: RetornoActivoComponent;
  let fixture: ComponentFixture<RetornoActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetornoActivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetornoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
