import { createSelector } from "@ngrx/store";
import { CalcState } from "./reducer";

export interface AppState {
  calculator: CalcState;
}

export const selectFeature = (state: AppState) => state.calculator;

export const selectIsCalculated = createSelector(
  selectFeature,
  (state: CalcState) => state.isCalculated
);

export const selectMonthlyRepayment= createSelector(
  selectFeature,
  (state: CalcState) => state.monthlyRepayment
);

export const selectTotalRepay= createSelector(
  selectFeature,
  (state: CalcState) => state.totalRepay
);
