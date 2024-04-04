import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    RouterModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {
  isTokenNull = true;
  
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  ngOnInit() {
    this.isTokenNull = this.authService.isTokenNull();
  }

  logoutRedirect() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
