import { Component, inject } from '@angular/core';
import { Project } from '../../project';
import { ProjectElementComponent } from '../project-element/project-element.component';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    ProjectElementComponent,
    CommonModule
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projectService: ProjectService = inject(ProjectService);
  list: Project[] = this.projectService.getList();

}
