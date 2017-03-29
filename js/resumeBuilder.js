//=======MODEL=========
var model = {
  init: function() {

 this.bio = {
  "name": "Megan Dollar",
  "role": "Front-end Web Developer",
  "contacts":
  {
      "email": "megdollar@gmail.com",
      "mobile": "404 409 4677",
      "github": "https://github.com/megdollar",
      "linkedin": "https://www.linkedin.com/in/megan-dollar-64993643",
      "location": "Decatur, GA",
  },
  "biopic": "images/megan.jpg",
  "welcomeMessage": "Hi, I'm Megan Dollar. An independent front-end developer based in Atlanta, GA.",
  "skills": ["HTML5", "CSS3", "JavaScript", "Front-End Web Development", "jQuery", "Git & GitHub", "Object-Oriented Programming"]
};

this.education = {
  "schools": [{
    "name": "Kennesaw State University",
    "location": "Kennesaw, GA",
    "degree": "BS",
    "majors": ["Psychology"],
    "dates": "2009",
    "url": "http://www.kennesaw.edu"
  }],
  "onlineCourses": [{
    "title": "Front-End Web Development",
    "school": "Udacity",
    "url": "https://www.udacity.com",
    "dates": "2016"
  }, {
    "title": "Intro to Programming Nanodegree",
    "school": "Udacity",
    "url": "https://www.udacity.com",
    "dates": "2016"
  }, {
    "title": "Intro to Visual Basic",
    "school": "Kennesaw State University",
    "url": "http://www.kennesaw.edu",
    "dates": "2015"
  }, {
    "title": "Intro to C#",
    "school": "Kennesaw State University",
    "url": "http://www.kennesaw.edu",
    "dates": "2015"
  }, {
    "title": "Intro to Programming",
    "school": "Kennesaw State University",
    "url": "http://www.kennesaw.edu",
    "dates": "2015"
  }]
};

this.projects = {
  "projects": [
    {
      "title": "Favorite Destinations API", 
      "description": "Utilizing Knockout and third-party APIs I developed this map to learn more about local attractions.",
      "dates": "January, 2017",
      "images" : ["images/destinations.png"],
      "view" : "https://megdollar.github.io/Neighborhood_Map/",
      "github": "https://github.com/megdollar/Neighborhood_Map"
    }, {
      "title": "Portfolio",
      "description": "Responsive Portfolio Project: Single page responsive site showcasing HTML, CSS, & Bootstrap.",
      "dates": "August, 2016",
      "images" : ["images/rwd.png"],
      "view"  : "https://megdollar.github.io/portfolio/",
      "github": "https://github.com/megdollar/portfolio"
    }, {
      "title": "Classic Arcade Game",
      "description": "Object-oriented JavaScript Game: A new twist on the classic arcade game Frogger.",
      "dates": "October, 2016",
      "images" : ["images/arcade.png"],
      "view"  : "https://megdollar.github.io/Arcade_Game",
      "github": "https://github.com/megdollar/Arcade_Game"
   }, {
      "title": "Website Perfomance Optimzation",
      "description": "Optimized the index and pizzeria for performace perfection",
      "dates": "November, 2016",
      "images" : ["images/pizza.png"],
      "view" : "https://megdollar.github.io/Pizzeria_portfolio/", 
      "github": "https://github.com/megdollar/Pizzeria_portfolio"
    }]
};

this.work = {
  "jobs": [{
    "employer": "Swarovski",
    "title": "Store Manager",
    "location": "Atlanta, GA",
    "dates": "July 2014 - November 2016",
    "description": "Build and maintain client relations daily by providing top notch service and utilizing clientele system. " + "Identify and resolve customer service issues in an efficient and timely manner. " + "Make necessary training and development modifications to assist staff in meeting company’s targeted goal. " + "Actively recruit top talent and maintain both management and sales staff."
  }, {
    "employer": "The Body Shop",
    "title": "Store Manager",
    "location": "Atlanta, GA",
    "dates": "February 2012 - July 2014",
    "description": "Led sales initiatives resulting in 110-130% to targeted goals. " + "Developed and maintained the store into one of the most profitable in the district."
  }, {
    "employer": "Emory Healthcare",
    "title": "Client Service Coordinator",
    "location": "Atlanta, GA",
    "dates": "April 2011 - January 2012",
    "description": "Provided outstanding customer service and increased client satisfaction to 100% from a previous score of 70%. " + "Obtained pre-certification for outpatient procedures and imaging."
  }, {
    "employer": "Roswell Urgent Care",
    "title": "Medical Receptionist",
    "location": "Roswell, GA",
    "dates": "November 2009 - May 2011",
    "description": "Processed and verified patient medical insurance information. " + "Assessed and handled urgent situations with attentiveness and efficiency."
  }]
};
}
};

//==Octopus=====

var octopus = {
  init: function(){
    model.init();
    view.init();
  },

//create a function to display bio
bioDisplay: function() {
  //display name and role
  var data = "%data%";
  var formattedName = HTMLheaderName.replace(data, model.bio.name);
  var formattedRole = HTMLheaderRole.replace(data, model.bio.role);
  $("#header").prepend(formattedName, formattedRole);

  //display contact info
  var contacts = model.bio.contacts;
  var formattedEmail = HTMLemail.replace("#", contacts.email).replace(data, contacts.email);
  var formattedMobile = HTMLmobile.replace(data, contacts.mobile);
  var formattedGithub = HTMLgithub.replace("#", contacts.github);
  var formattedLinkedin = HTMLlinkedin.replace("#", contacts.linkedin);
  var formattedLoc = HTMLlocation.replace(data, contacts.location);
  var formattedBiopic = HTMLbioPic.replace(data, model.bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, model.bio.welcomeMessage);
  $("#topContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedLinkedin, formattedLoc);
  $("#footerContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedLinkedin, formattedLoc);
  $("#header").append(formattedWelcomeMsg, formattedBiopic);

  //function to display skills
  $("#header").append(HTMLskillsStart);

  model.bio.skills.forEach(function(skill) {
    var formattedSkills = HTMLskills.replace(data, skill);
    $("#skills").append(formattedSkills);
  });
},

//display function for education
educationDisplay: function() {
  for (var i = 0; i < model.education.schools.length; i++) {
    //create a new div for school experience
    $("#education").append(HTMLschoolStart);

    var ed = model.education
    var data = "%data%";
    var formattedName = HTMLschoolName.replace(data, ed.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace(data, ed.schools[i].degree);
    $(".education-entry:last").append(formattedName + formattedDegree);

    $(".education-entry:last").append(HTMLschoolDates.replace(data, ed.schools[i].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace(data, ed.schools[i].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace(data, ed.schools[i].majors));
    $(".education-entry:last").append(HTMLonlineURL.replace("#", ed.schools[i].url).replace(data, ed.schools[i].url));
  }
    //add online classes
  $("#education").append(HTMLonlineClasses);
    for (var b = 0; b < model.education.onlineCourses.length; b++) {
      $("#education").append(HTMLschoolStart);

      var formattedTitle = HTMLonlineTitle.replace(data, model.education.onlineCourses[b].title);
      var formattedSchool = HTMLonlineSchool.replace(data, model.education.onlineCourses[b].school);
      $(".education-entry:last").append(formattedTitle + formattedSchool);

      $(".education-entry:last").append(HTMLonlineDates.replace(data, model.education.onlineCourses[b].dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("#", model.education.onlineCourses[b].url).replace(data, model.education.onlineCourses[b].url));
  }
},

projectsDisplay: function() {
  for (var i = 0; i < model.projects.projects.length; i ++) {
    $("#projects").append(HTMLprojectStart);
    var data = "%data%";

    $(".project-entry:last").append(HTMLprojectTitle.replace(data, model.projects.projects[i].title));
    $(".project-entry:last").append(HTMLprojectDescription.replace(data, model.projects.projects[i].description));
    $(".project-entry:last").append(HTMLprojectDates.replace(data, model.projects.projects[i].dates));
    $(".project-entry:last").append(HTMLprojectImage.replace(data, model.projects.projects[i].images));
    $(".project-entry:last").append(HTMLprojectView.replace("#", model.projects.projects[i].view).replace(data, model.projects.projects[i].view));
    $(".project-entry:last").append(HTMLprojectGithub.replace("#", model.projects.projects[i].github).replace(data, model.projects.projects[i].github));
  }
},

workDisplay: function() {
  for (var i = 0; i < model.work.jobs.length; i ++) {
    $("#workExperience").append(HTMLworkStart);
    var data = "%data%";

    var formattedEmployer = HTMLworkEmployer.replace(data, model.work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace(data, model.work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);


    $(".work-entry:last").append(HTMLworkLocation.replace(data, model.work.jobs[i].location));
    $(".work-entry:last").append(HTMLworkDates.replace(data, model.work.jobs[i].dates));
    $(".work-entry:last").append(HTMLworkDescription.replace(data, model.work.jobs[i].description));

  }
}

  
};

//======View====
var view = {
  init: function() {
    octopus.bioDisplay();
    octopus.educationDisplay();
    octopus.workDisplay();
    octopus.projectsDisplay();
  }
};
  /*
* Open the drawer when the menu ison is clicked
*/
var menu = document.querySelector('#menu');
var main = document.querySelector('#main');
var drawer = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
   drawer.classList.toggle('open');
   e.stopPropagation();
});
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});



octopus.init();


//adds a map with work history
$("#mapDiv").append(googleMap);







