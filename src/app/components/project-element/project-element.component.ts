import { Component, Input } from '@angular/core';
import { Project } from '../../project';

@Component({
  selector: 'app-project-element',
  standalone: true,
  imports: [],
  templateUrl: './project-element.component.html',
  styleUrl: './project-element.component.css'
})
export class ProjectElementComponent {
  @Input() project!: Project;
}
