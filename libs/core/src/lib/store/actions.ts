import { createAction, props } from '@ngrx/store';
import { MortgageCalculation } from '@org/shared/mortgage-model';

export const clear = createAction('[Calculating] Clear');

export const calculate = createAction(
  '[Calculating] Calculate',
  props<{ calculation: MortgageCalculation }>()
);
