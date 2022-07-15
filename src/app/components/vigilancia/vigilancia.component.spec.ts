import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilanciaComponent } from './vigilancia.component';

describe('VigilanciaComponent', () => {
  let component: VigilanciaComponent;
  let fixture: ComponentFixture<VigilanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VigilanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VigilanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
