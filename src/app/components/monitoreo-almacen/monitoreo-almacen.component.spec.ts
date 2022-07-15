import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreoAlmacenComponent } from './monitoreo-almacen.component';

describe('MonitoreoAlmacenComponent', () => {
  let component: MonitoreoAlmacenComponent;
  let fixture: ComponentFixture<MonitoreoAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoreoAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoreoAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
