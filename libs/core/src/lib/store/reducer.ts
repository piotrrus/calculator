import { createReducer, on } from '@ngrx/store';
import * as actions from './actions';
import * as calc from '@org/calculations';

export const initialState: CalcState = {
  isCalculated: false,
  totalRepay: undefined,
  monthlyRepayment: undefined,
};

export interface CalcState {
  isCalculated: boolean;
  monthlyRepayment: number | undefined;
  totalRepay: number | undefined;
}

export const calculationReducer = createReducer(
  initialState,
  on(
    actions.calculate,
    (state, { calculation }) =>
      ({
        ...state,
        isCalculated: true,
        monthlyRepayment: calc.monthlyRepayment(calculation),
        totalRepay: calc.totalRepay(calculation),
      })
  ),
  on(actions.clear, () => {
    return initialState;
  })
);
