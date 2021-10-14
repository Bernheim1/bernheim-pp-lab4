import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaisRepartidorComponent } from './detalle-pais-repartidor.component';

describe('DetallePaisRepartidorComponent', () => {
  let component: DetallePaisRepartidorComponent;
  let fixture: ComponentFixture<DetallePaisRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePaisRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePaisRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
