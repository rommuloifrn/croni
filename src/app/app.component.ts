import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ProjectListComponent } from './components/project-list/project-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet, 
    RouterModule,
    HomeComponent,
    TopbarComponent,
    ProjectListComponent
  ],
  templateUrl: `./app.component.html`
  ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cronos';
}
