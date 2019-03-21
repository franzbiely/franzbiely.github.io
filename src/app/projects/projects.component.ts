import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  toHome() {
    this.router.navigateByUrl('/home');
  }
  toProject() {
    this.router.navigateByUrl('/project');
  }
}
