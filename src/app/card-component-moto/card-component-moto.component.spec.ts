import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponentMotoComponent } from './card-component-moto.component';

describe('CardComponentMotoComponent', () => {
  let component: CardComponentMotoComponent;
  let fixture: ComponentFixture<CardComponentMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponentMotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponentMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
