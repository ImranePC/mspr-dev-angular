import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficineComponent } from './officine.component';

describe('OfficineComponent', () => {
  let component: OfficineComponent;
  let fixture: ComponentFixture<OfficineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
