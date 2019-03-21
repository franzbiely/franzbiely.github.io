import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toHome() {
    this.router.navigateByUrl('/home');
  }
}
