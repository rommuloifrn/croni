import { Routes } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

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
        path: 'login',
        component: LoginComponent
    }
];
