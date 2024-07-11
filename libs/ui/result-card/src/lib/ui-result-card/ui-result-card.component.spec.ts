import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiResultCardComponent } from './ui-result-card.component';

describe('UiResultCardComponent', () => {
  let component: UiResultCardComponent;
  let fixture: ComponentFixture<UiResultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiResultCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
