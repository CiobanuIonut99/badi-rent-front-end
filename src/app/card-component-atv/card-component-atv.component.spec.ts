import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponentAtvComponent } from './card-component-atv.component';

describe('CardComponentAtvComponent', () => {
  let component: CardComponentAtvComponent;
  let fixture: ComponentFixture<CardComponentAtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponentAtvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponentAtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
