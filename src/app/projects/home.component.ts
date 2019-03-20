import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toTeam() {
    this.router.navigateByUrl('/team');
  }
  toProjects() {
    this.router.navigateByUrl('/projects');
  }
  toContact() {
    this.router.navigateByUrl('/contact');
  }
}
