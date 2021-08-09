import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficineChangeComponent } from './officine-change.component';

describe('OfficineChangeComponent', () => {
  let component: OfficineChangeComponent;
  let fixture: ComponentFixture<OfficineChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficineChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficineChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
