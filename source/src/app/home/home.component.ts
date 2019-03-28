import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/functions.js";
    this.elementRef.nativeElement.appendChild(s);
  }
  ngOnInit() {

    
  }
  
}
