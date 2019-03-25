import { Component, OnInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {


  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/tilt.js";
    this.elementRef.nativeElement.appendChild(s);
  }
  ngOnInit() {
  }
}
