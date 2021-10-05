import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../assets/forms.css']
})
export class LoginComponent implements OnInit {

  model = {
    email: '',
    password: ''
  };

  submitted = false

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
