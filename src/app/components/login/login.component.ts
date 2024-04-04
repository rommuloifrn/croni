import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  username = '';
  password = '';

  async onClick() {
    if (await this.authService.login(this.username, this.password)) {
      this.router.navigate(["/project-list"])
    }
  }

}
