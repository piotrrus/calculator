import { Component, DestroyRef, inject } from '@angular/core';
import { UiResultCardComponent } from '@ui/result-card';
import { UiDescriptionCardComponent } from '@ui/description-card';
import { UiFormCardComponent } from '@ui/form-card';
import { MortgageCalculation } from '@org/shared/mortgage-model';
import { Facade } from '@org/store';
import { CommonModule, NgIf } from '@angular/common';
import { MortgageTypesService } from '../services/mortgage-types.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-features-calculator-page',
  standalone: true,
  imports: [
    CommonModule,
    UiResultCardComponent,
    UiDescriptionCardComponent,
    UiFormCardComponent,
    NgIf,
  ],
  templateUrl: './features-calculator-page.component.html',
  styleUrl: './features-calculator-page.component.scss',
  providers: [MortgageTypesService],
})
export class FeaturesCalculatorPageComponent {
  public resetForm = false;
  public isCalculated = this.facade.isCalculated;
  public monthlyRepayments = this.facade.monthlyRepayment;
  public totalRepay = this.facade.totalRepay;

  public mortgageTypesList = toSignal(
    this.mortgageTypesService.getMortgageTypes()
  );

  private readonly destroyRef = inject(DestroyRef);
  private isFormValid = false;
  private calculatingData: MortgageCalculation = <MortgageCalculation>{};

  constructor(
    private readonly facade: Facade,
    private mortgageTypesService: MortgageTypesService
  ) {}

  public clearAll(): void {
    this.facade.clear();
    this.resetForm = true;
  }

  public onCalculatorFormChange($event: MortgageCalculation): void {
    this.calculatingData = $event;
  }

  public onCalculatorFormValid($event: boolean): void {
    this.isFormValid = $event;
  }

  public onCalculating(): void {
    this.facade.calculate(this.calculatingData);
  }
}
