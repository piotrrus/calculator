import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesCalculatorPageComponent } from './features-calculator-page.component';

describe('FeaturesCalculatorPageComponent', () => {
  let component: FeaturesCalculatorPageComponent;
  let fixture: ComponentFixture<FeaturesCalculatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesCalculatorPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
