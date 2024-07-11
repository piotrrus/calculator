import { ImportProvidersSource } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { calculationReducer } from '@org/store';

export const storageModuleProviders: ImportProvidersSource[] = [
  StoreModule.forRoot({ calculator: calculationReducer }),
  EffectsModule.forRoot([]),
];


 