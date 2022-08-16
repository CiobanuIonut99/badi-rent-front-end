import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvPageComponent } from './atv-page.component';

describe('AtvPageComponent', () => {
  let component: AtvPageComponent;
  let fixture: ComponentFixture<AtvPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
