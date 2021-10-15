import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/services/auth.service';
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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.auth.register({
      name: this.userFormGroup.get('name')?.value,
      email: this.userFormGroup.get('email')?.value,
      password: this.userFormGroup.get('password')?.value
    })
  }
}
