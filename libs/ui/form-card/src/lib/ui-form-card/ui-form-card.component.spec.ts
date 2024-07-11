import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiFormCardComponent } from './ui-form-card.component';

describe('UiFormCardComponent', () => {
  let component: UiFormCardComponent;
  let fixture: ComponentFixture<UiFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFormCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('#Calculator Form ', () => {
    it('should amount has no errors', () => {
      const orderDate = component.form.amount;
      orderDate?.setValue('1234');
      expect(component.form.form.errors).toBeNull();
    });

    it('should form field amount has error', () => {
      const amount = component.form.amount;
      amount?.setValue(null);
      expect(amount?.errors).toBeTruthy();
    });

    it('should form emit errors', () => {
      const spy = spyOn(component.isFormValid, 'emit');
      const form = component.form;
      form.amount?.setValue(null);
      expect(spy).toHaveBeenCalledWith(false);
    });

    it('should form emit errors', () => {
      const spy = spyOn(component.isFormValid, 'emit');
      component.form.amount?.setValue('asdasda');
      expect(spy).toHaveBeenCalledWith(true);
    });

    it('should form change emit value', () => {
      const spy = spyOn(component.formChange, 'emit');
      component.form.amount?.setValue('1234');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
