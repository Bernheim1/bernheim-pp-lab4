import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDetalleRepartidorComponent } from './tabla-detalle-repartidor.component';

describe('TablaDetalleRepartidorComponent', () => {
  let component: TablaDetalleRepartidorComponent;
  let fixture: ComponentFixture<TablaDetalleRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDetalleRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDetalleRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
