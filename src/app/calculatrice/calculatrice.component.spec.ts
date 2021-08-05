import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatriceComponent } from './calculatrice.component';

describe('CalculatriceComponent', () => {
  let component: CalculatriceComponent;
  let fixture: ComponentFixture<CalculatriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//TDD calculatrice division pour faire les pourcentages
describe('AppComponent', () => {
describe('divide operator function', () => {
  it('should divide two numbers', () => {
    const fixture = TestBed.createComponent(CalculatriceComponent);
    const instance = fixture.debugElement.componentInstance;
    const result = instance.divide(15, 1.2);
    expect(result).toEqual(12.5);
  });
});
//TDD calculatrice pour les multiplications
describe('times operator function', () => {
  it('should multiply two numbers', () => {
    const fixture = TestBed.createComponent(CalculatriceComponent);
    const instance = fixture.debugElement.componentInstance;
    const result = instance.times(4, 1.2);
    expect(result).toEqual(4.8);
  });
});
});