import { Injectable, inject } from '@angular/core';
import { Project } from '../../project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  http: HttpClient = inject(HttpClient);

  private projectList = [
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

  getList(): Project[] {
    return this.projectList;
  }

  getProjectById(id: number): Project | undefined {
    return this.projectList.find(project => project.id === id);
  }

  constructor() { }
}
