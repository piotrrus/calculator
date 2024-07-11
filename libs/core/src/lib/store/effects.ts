import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './actions';
// import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ConfiguratorStoreEffects {
  constructor(
    private readonly actions$: Actions
  ) {}

  getCalculation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.calculate),
    //   exhaustMap(({ configuratorLinkName }) =>
    //     this.searchConfiguratorsApiService
    //       .getSearchConfiguratorQuestion({ configuratorLinkName })
    //       .pipe(
    //         map((question) => getQuestionSuccess({ question })),
    //         catchError((error) => of(getQuestionFailed({ error }))),
    //       ),
    //   ),
    ),
  );
}