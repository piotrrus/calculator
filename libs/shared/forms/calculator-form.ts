import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

export class CalculatorForm {
     private frm: FormGroup = this.createForm();

     constructor(private fb: FormBuilder) {}

     private createForm(): FormGroup {
          return (this.frm = this.fb.group({
               amount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
               term: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
               rate: ['', [Validators.required,  Validators.pattern("^[0-9]*$")]],
               type: ['', [Validators.required]],
          }));
     }

     public get amount(): AbstractControl | null {
          return this.frm.get('amount');
     }

     public get term(): AbstractControl | null {
          return this.frm.get('term');
     }

     public get rate(): AbstractControl | null {
          return this.frm.get('rate');
     }

     public get type(): AbstractControl | null {
          return this.frm.get('type');
     }

     public get form(): FormGroup {
          return this.frm;
     }

     public set form(value: FormGroup) {
          this.frm = value;
     }
}
