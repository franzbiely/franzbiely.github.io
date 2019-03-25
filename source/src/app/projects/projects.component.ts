import { Component, OnInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(private elementRef:ElementRef) {};

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/tilt.js";
    this.elementRef.nativeElement.appendChild(s);
  }
  ngOnInit() {
    
    
  }
}
