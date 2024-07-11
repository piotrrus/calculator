import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, selectIsCalculated, selectMonthlyRepayment, selectTotalRepay} from "./selectors";
import { clear, calculate } from "./actions";
import { MortgageCalculation } from '@org/shared/mortgage-model';

@Injectable({
    providedIn: 'root'
})
export class Facade {

    public readonly isCalculated = this.store.selectSignal(selectIsCalculated);
    public readonly monthlyRepayment = this.store.selectSignal(selectMonthlyRepayment);
    public readonly totalRepay = this.store.selectSignal(selectTotalRepay);

    constructor(private readonly store: Store<AppState>) {}


    public clear(): void {
        this.store.dispatch(clear())
    }

    public calculate(calculationData: MortgageCalculation): void {
        this.store.dispatch(calculate({calculation: calculationData}));
    }

}