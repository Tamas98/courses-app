import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.auth.login(this.model);
  }
}
