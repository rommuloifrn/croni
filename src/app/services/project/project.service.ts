import { Injectable, inject } from '@angular/core';
import { Project } from '../../project';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseURL = "http://localhost:8080/projects";

  http: HttpClient = inject(HttpClient);


  // private projectList = this.http.get("http://localhost:8080/projects", {
  //   headers : new HttpHeaders({headers:`Bearer: ${localStorage.getItem("JWT")}`})
  // }).subscribe((val) => {return val});

  // private projectList = [
  //   {
  //     "id":1,
  //     "title": "Ecommerce with Svelte", 
  //     "text":"projetinho aosd asd asdoa asdd asd asdas d", 
  //     "totalHours": 27
  //   },
  //   {
  //     "id":2,
  //     "title": "Text writing site API", 
  //     "text":"projetinho aosd asd asdoa asdd asd asdas d", 
  //     "totalHours": 42
  //   },
  //   {
  //     "id":3,
  //     "title": "Competitive programming duel system", 
  //     "text":"projetinho aosd asd asdoa asdd asd asdas d", 
  //     "totalHours": 3
  //   },
  //   {
  //     "id":4,
  //     "title": "DIY projects frontend", 
  //     "text":"projetinho aosd asd asdoa asdd asd asdas d", 
  //     "totalHours": 8
  //   },
  // ];

  async getList() {
    //return this.projectList;
    const data = await fetch(this.baseURL, {
      method: "GET",
      headers: { 
        "Authorization": `Bearer ${localStorage.getItem("JWT")}`,
        "Content-Type": "application/json",
      } })
    
    return await data.json() ?? [];
    
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    //return this.projectList.find(project => project.id === id);
    const data = await fetch(`${this.baseURL}/${id}`,
    {
      method: "GET",
      headers: { 
        "Authorization": `Bearer ${localStorage.getItem("JWT")}`,
        "Content-Type": "application/json",
      } }
    );
    return await data.json() ?? {};
  }

  constructor() { }
}
