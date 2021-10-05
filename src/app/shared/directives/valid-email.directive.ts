import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidEmailDirective,
      multi: true,
     },
  ]
})
export class ValidEmailDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if(control.value === null) {
      return null;
    }
    if(control.value.match('[a-z]*[0-9]*[a-z]*[0-9]*@(gmail|epam|expediagroup).(com|hu)')){
      return null;
    } else {
      return {email: "Invalid email"};
    }
  }

}
