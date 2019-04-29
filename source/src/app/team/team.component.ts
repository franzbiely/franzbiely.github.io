import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit { 


   members = ["justin", "robert", "jurris"];
   membersName = [
     "Justin", 
     "Robert", 
     "Jurris"
    ];
  
  positionDisplay = "Front-End Developer Back-End Developer";
  imageDisplay = "";
  nameDisplay = "";
  descriptionDisplay = "";
  memberCount = 0;
  justinPosition = "Front-End Developer Back-End Developer";
  robertPosition = "Front-End Developer Back-End Developer";
  jurrisPosition = "Front-End Developer Graphic Designer";
  positions = [this.justinPosition, this.robertPosition, this.jurrisPosition];
  justinDesc = "Justin is an intermediate full stack Web developer.";
  robertDesc = "He is an intermediate PHP developer and he handles more on back-end development.";
  jurrisDesc = "Jurris works on web and graphic designing.";
  descriptions = [this.justinDesc, this.robertDesc, this.jurrisDesc];
  images = [
    "<img height='95%' src='../../assets/images/Members/justin.png'>",
    "<img height='95%' src='../../assets/images/Members/robert.png'>",
    "<img height='95%' src='../../assets/images/Members/jurris2.png'>"
  ];
  previousMember(){
   var skillSetContainer = document.getElementById("skill-container");
   this.memberCount--;
    if(this.memberCount == -1){
      this.memberCount = this.members.length-1;
      skillSetContainer.classList.remove(this.members[0]);
    }
    this.imageDisplay = this.images[this.memberCount];
    this.descriptionDisplay = this.descriptions[this.memberCount];
    this.nameDisplay = this.membersName[this.memberCount];
    this.positionDisplay = this.positions[this.memberCount];
    skillSetContainer.classList.remove(this.members[this.memberCount + 1]);
    document.getElementById("description").innerHTML = this.descriptionDisplay;
    document.getElementById("role").innerHTML = this.positionDisplay;
    document.getElementById("name").innerHTML = this.nameDisplay;
    document.getElementById("member-image").innerHTML = this.imageDisplay;
    skillSetContainer.classList.add(this.members[this.memberCount]);
  }
  nextMember() {
    var skillSetContainer = document.getElementById("skill-container");
    if (this.memberCount < this.members.length) {
      this.memberCount++;
      skillSetContainer.classList.remove(this.members[this.memberCount - 1]);
      if (this.memberCount == this.members.length) {
        this.memberCount = 0;
      }
      if (this.memberCount > 1) {
        skillSetContainer.classList.remove(this.members[this.memberCount - 1]);
      }
      this.imageDisplay = this.images[this.memberCount];
      this.descriptionDisplay = this.descriptions[this.memberCount];
      this.nameDisplay = this.membersName[this.memberCount];
      this.positionDisplay = this.positions[this.memberCount];
    } else {
      this.memberCount = 0;
      skillSetContainer.classList.remove(this.members[this.members.length - 1]);
    }
    document.getElementById("role").innerHTML = this.positionDisplay;
    document.getElementById("description").innerHTML = this.descriptionDisplay;
    document.getElementById("name").innerHTML = this.nameDisplay;
    document.getElementById("member-image").innerHTML = this.imageDisplay;
    skillSetContainer.classList.add(this.members[this.memberCount]);
  }
  constructor(private router: Router) { }

  ngOnInit() {     
    $.each(document.images, function(){
      var this_image = this;
      var src = $(this_image).attr('src') || '' ;
      if (!(src.length > 0)){
          //this_image.src = options.loading; // show loading
          var lsrc = $(this_image).attr('lsrc') || '' ;
          if(lsrc.length > 0){
              var img = new Image();
              img.src = lsrc;
              $(img).load(function() {
                  this_image.src = this.src;
              });
          }
      }
  });
  }
 
}

