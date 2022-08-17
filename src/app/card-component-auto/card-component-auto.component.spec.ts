import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponentAutoComponent } from './card-component-auto.component';

describe('CardComponentComponent', () => {
  let component: CardComponentAutoComponent;
  let fixture: ComponentFixture<CardComponentAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponentAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponentAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
