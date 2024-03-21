import { Component, Input } from '@angular/core';
import { Project } from '../../project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-element',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './project-element.component.html',
  styleUrl: './project-element.component.css'
})
export class ProjectElementComponent {
  @Input() project!: Project;
}
