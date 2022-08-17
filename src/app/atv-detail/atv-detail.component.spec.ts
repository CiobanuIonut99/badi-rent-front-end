import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvDetailComponent } from './atv-detail.component';

describe('AtvDetailComponent', () => {
  let component: AtvDetailComponent;
  let fixture: ComponentFixture<AtvDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
