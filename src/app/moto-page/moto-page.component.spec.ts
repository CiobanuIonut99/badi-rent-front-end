import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoPageComponent } from './moto-page.component';

describe('MotoPageComponent', () => {
  let component: MotoPageComponent;
  let fixture: ComponentFixture<MotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
