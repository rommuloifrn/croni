import { Component } from '@angular/core';
import { Project } from '../../project';
import { ProjectElementComponent } from '../project-element/project-element.component';
import { CommonModule } from '@angular/common';

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
  list: Project[] = [
    {
      "id":1,
      "title": "Ecommerce with Svelte", 
      "text":"projetinho aosd asd asdoa asdd asd asdas d", 
      "totalHours": 27
    },
    {
      "id":2,
      "title": "Text writing site API", 
      "text":"projetinho aosd asd asdoa asdd asd asdas d", 
      "totalHours": 42
    },
    {
      "id":3,
      "title": "Competitive programming duel system", 
      "text":"projetinho aosd asd asdoa asdd asd asdas d", 
      "totalHours": 3
    },
    {
      "id":4,
      "title": "DIY projects frontend", 
      "text":"projetinho aosd asd asdoa asdd asd asdas d", 
      "totalHours": 8
    },
  ];
}
