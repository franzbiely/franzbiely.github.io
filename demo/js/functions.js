function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 5000);

  function checkReady() {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? "flex" : "none";
}
onReady(function() {
  show("content", true);
  show("loading-container", false);
});

var members = ["sir", "justin", "robert", "jurris"];
var membersName = ["Francis", "Justin", "Robert", "Jurris"];
var positions = [
  "Project Manager",
  "Front-End Developer / Back-End Developer",
  "Front-End Developer / Back-End Developer",
  "Front-End Developer / Graphic Designer"
];
var positionDisplay = "";
var nameDisplay = "";
var descriptionDisplay = "";
var memberCount = 0;
var justinDesc = "Justin is an intermediate full stack Web developer.";
var sirDesc =
  "Artificer's team leader. Senior Front-End and Back-End Developer.";
var robertDesc =
  "He is an intermediate PHP developer and he handles more on back-end development.";
var jurrisDesc = "Jurris works on web and graphic designing.";
var descriptions = [sirDesc, justinDesc, robertDesc, jurrisDesc];

function nextMember() {
  var skillSetContainer = document.getElementById("skill-container");
  if (memberCount < members.length) {
    memberCount++;
    skillSetContainer.classList.remove(members[memberCount - 1]);
    if (memberCount == members.length) {
      memberCount = 0;
    }
    if (memberCount > 1) {
      skillSetContainer.classList.remove(members[memberCount - 1]);
    }
    descriptionDisplay = descriptions[memberCount];
    nameDisplay = membersName[memberCount];
    positionDisplay = positions[memberCount];
  } else {
    alert("sobra na" + memberCount);
    memberCount = 0;
    skillSetContainer.classList.remove(members[members.length - 1]);
  }
  document.getElementById("description").innerHTML = descriptionDisplay;
  document.getElementById("position").innerHTML = positionDisplay;
  document.getElementById("name").innerHTML = nameDisplay;
  skillSetContainer.classList.add(members[memberCount]);
}
