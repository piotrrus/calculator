// import { CommonModule } from '@angular/common';
import { Component, DestroyRef, EventEmitter, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
     template: '',
})

export abstract class BaseFormComponent {
  abstract form: { form: FormGroup };
  abstract formChange: EventEmitter<any>;
  abstract isFormValid: EventEmitter<boolean>;

 private readonly destroyRef = inject(DestroyRef);

  public checkFormAndEmit(): void {
    this.form.form.valueChanges
      .pipe(
        tap(() => {
          this.formChange.emit(this.form.form.getRawValue());
          this.isFormValid.emit(this.form.form.valid);
        }),
       takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
