import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreoComprasComponent } from './monitoreo-compras.component';

describe('MonitoreoComprasComponent', () => {
  let component: MonitoreoComprasComponent;
  let fixture: ComponentFixture<MonitoreoComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoreoComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoreoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
