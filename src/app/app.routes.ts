import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { calculationReducer } from '@org/store';

export const appRoutes: Route[] = [
  {
    path: '',
    providers: [
      provideState({ name: 'calculator', reducer: calculationReducer }),
    ],
    loadComponent: () =>
      import('@org/features/calculator-page').then(
        (module) => module.FeaturesCalculatorPageComponent
      ),
  },
];
