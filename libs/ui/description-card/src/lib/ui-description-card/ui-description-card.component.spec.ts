import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiDescriptionCardComponent } from './ui-description-card.component';

describe('UiDescriptionCardComponent', () => {
  let component: UiDescriptionCardComponent;
  let fixture: ComponentFixture<UiDescriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDescriptionCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiDescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
