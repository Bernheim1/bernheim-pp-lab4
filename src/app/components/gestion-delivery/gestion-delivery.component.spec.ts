import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeliveryComponent } from './gestion-delivery.component';

describe('GestionDeliveryComponent', () => {
  let component: GestionDeliveryComponent;
  let fixture: ComponentFixture<GestionDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
