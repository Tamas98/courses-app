import { Component } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses-app';

  constructor(private auth: AuthService) {}

  logoutUser() {
    this.auth.logout();
  }
}
