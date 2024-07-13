import { Component, DestroyRef, inject, Signal } from '@angular/core';
import { UiResultCardComponent } from '@ui/result-card';
import { UiDescriptionCardComponent } from '@ui/description-card';
import { UiFormCardComponent } from '@ui/form-card';
import { MortgageCalculation } from '@org/shared/mortgage-model';
import { Facade } from '@org/store';
import { CommonModule, NgIf } from '@angular/common';
import { MortgageTypesService } from '../services/mortgage-types.service';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { RestResponse } from '../services/rest-response.interface';

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
  public mortgageTypes$: Observable<RestResponse[]> =
    this.mortgageTypesService.getMortgageTypes();

  public mortgageTypesList= toSignal(
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
