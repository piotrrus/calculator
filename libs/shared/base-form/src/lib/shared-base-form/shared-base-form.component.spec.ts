import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedBaseFormComponent } from './shared-base-form.component';

describe('SharedBaseFormComponent', () => {
  let component: SharedBaseFormComponent;
  let fixture: ComponentFixture<SharedBaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedBaseFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedBaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
