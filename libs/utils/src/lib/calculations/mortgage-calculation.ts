import { MortgageCalculation } from '@org/shared/mortgage-model';

export function totalRepay(calculation: MortgageCalculation): number {
  const result = calculation.amount * calculation.rate;
  return result;
}
export function monthlyRepayment(calculation: MortgageCalculation): number {
  const result = (calculation.amount * calculation.rate) / calculation.term;
  return result;
}
