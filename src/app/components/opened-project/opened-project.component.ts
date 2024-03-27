import { Component, inject} from '@angular/core';
import { Project } from '../../project';
import { ProjectService } from '../../services/project/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opened-project',
  standalone: true,
  imports: [],
  templateUrl: './opened-project.component.html',
  styleUrl: './opened-project.component.css'
})
export class OpenedProjectComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  project: Project | undefined;
  projectService: ProjectService = inject(ProjectService);

  constructor() {
    const projectId = parseInt(this.route.snapshot.params['id'], 10);
    this.projectService.getProjectById(projectId).then(project => {
      this.project = project;
    });
  }
}
