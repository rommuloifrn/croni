import { Routes } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OpenedProjectComponent } from './components/opened-project/opened-project.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'project-list', 
        component: ProjectListComponent
    },
    {
        path: 'project:id',
        component: OpenedProjectComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        'title': 'Profile'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }

];
