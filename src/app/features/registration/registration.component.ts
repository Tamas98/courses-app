import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidEmailDirective } from 'src/app/shared/directives/valid-email.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../../../assets/forms.css']
})
export class RegistrationComponent implements OnInit {

  submitted = false

  userFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
