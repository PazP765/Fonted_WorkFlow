import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaActivoComponent } from './salida-activo.component';

describe('SalidaActivoComponent', () => {
  let component: SalidaActivoComponent;
  let fixture: ComponentFixture<SalidaActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaActivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
