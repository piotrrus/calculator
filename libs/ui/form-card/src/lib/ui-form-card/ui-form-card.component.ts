import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  effect,
  input,
  // output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CalculatorForm } from '../forms/calculator-form';
import { FORM_ERROR_MESSAGES } from '../enums/error-messages.enum';
import { BaseFormComponent } from '@org/shared/base-form';
import { MortgageCalculation } from '@org/shared/mortgage-model';

@Component({
  selector: 'lib-ui-form-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ui-form-card.component.html',
  styleUrl: './ui-form-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UiFormCardComponent extends BaseFormComponent {
  public resetForm = input<boolean>();
  public form: CalculatorForm = new CalculatorForm(this.fb);
  public errors = FORM_ERROR_MESSAGES;

  @Output() public formChange = new EventEmitter<MortgageCalculation>();
  @Output() public isFormValid = new EventEmitter<boolean>();
  @Output() public isSendCalculation = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    super();

    effect(() => {
      this.resetForm() ? this.form.form.reset() : null;
    });

    this.checkFormAndEmit();
  }
  public sendCalculation(): void {
    this.isSendCalculation.emit(true);
  }
}
