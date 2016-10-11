var bio = {
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
  "welcomeMessage": "Experienced manager with one year of programming and front-end course-work.",
  "skills": ["HTML", "CSS", "JavaScript", "Front-End Web Development", "jQuery", "Git & GitHub", "Object-Oriented Programming"]
};

//create a function to display bio
bio.display = function() {
  //display name and role
  var data = "%data%";
  var formattedName = HTMLheaderName.replace(data, bio.name);
  var formattedRole = HTMLheaderRole.replace(data, bio.role);
  $("#header").prepend(formattedName, formattedRole);

  //display contact info
  var formattedEmail = HTMLemail.replace("#", bio.contacts.email).replace(data, bio.contacts.email);
  var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
  var formattedGithub = HTMLgithub.replace("#", bio.contacts.github);
  var formattedLinkedin = HTMLlinkedin.replace("#", bio.contacts.linkedin);
  var formattedLoc = HTMLlocation.replace(data, bio.contacts.location);
  var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
  $("#topContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedLinkedin, formattedLoc);
  $("#footerContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedLinkedin, formattedLoc);
  $("#header").append(formattedWelcomeMsg, formattedBiopic);

  //function to display skills
  $("#header").append(HTMLskillsStart);

  bio.skills.forEach(function(skill) {
    var formattedSkills = HTMLskills.replace(data, skill);
    $("#skills").append(formattedSkills);
  });
};
bio.display();

var education = {
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

//display function for education
education.display = function() {
  for (var i = 0; i < education.schools.length; i++) {
    //create a new div for school experience
    $("#education").append(HTMLschoolStart);

    //format the data
    var data = "%data%";
    var formattedName = HTMLschoolName.replace(data, education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
    $(".education-entry:last").append(formattedName + formattedDegree);

    $(".education-entry:last").append(HTMLschoolDates.replace(data, education.schools[i].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace(data, education.schools[i].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace(data, education.schools[i].majors));
    $(".education-entry:last").append(HTMLonlineURL.replace("#", education.schools[i].url).replace(data, education.schools[i].url));
  }
    //add online classes
  $("#education").append(HTMLonlineClasses);
    for (var b = 0; b < education.onlineCourses.length; b++) {
      $("#education").append(HTMLschoolStart);

      var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[b].title);
      var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[b].school);
      $(".education-entry:last").append(formattedTitle + formattedSchool);

      $(".education-entry:last").append(HTMLonlineDates.replace(data, education.onlineCourses[b].dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("#", education.onlineCourses[b].url).replace(data, education.onlineCourses[b].url));
  }
};

education.display();

var projects = {
  "projects": [
    {
      "title": "Animal Trading Card",
      "description": "First CSS Project: Animal trading card created to showcase HTML & CSS.",
      "dates": "June, 2016",
      "images" : ["images/animal.jpg"],
      "github": "https://github.com/megdollar/Animal-Trading-Card"
    }, {
      "title": "Portfolio",
      "description": "Responsive Portfolio Project: Single page responsive site showcasing HTML, CSS, & Bootstrap. Future and current projects linked via GitHub.",
      "dates": "August, 2016",
      "images" : ["images/portfolio.jpg"],
      "github": "https://github.com/megdollar/portfolio"
    }, {
      "title": "Classic Arcade Game",
      "description": "Coming soon: Object-oriented JavaScript Game: A new twist on the classic arcade game Frogger.",
      "dates": "October, 2016",
      "images" : ["http://lorempixel.com/300/300"],
      "github": "link"
   }, {
      "title": "Website Optimzation",
      "description": "Coming soon",
      "dates": "November, 2016",
      "images" : ["http://lorempixel.com/300/300"],
      "github": "link"
    }]
};

//add a function to display projects
projects.display = function() {
  for (var i = 0; i < projects.projects.length; i ++) {
    $("#projects").append(HTMLprojectStart);
    var data = "%data%";

    $(".project-entry:last").append(HTMLprojectTitle.replace(data, projects.projects[i].title));
    $(".project-entry:last").append(HTMLprojectDescription.replace(data, projects.projects[i].description));
    $(".project-entry:last").append(HTMLprojectDates.replace(data, projects.projects[i].dates));
    $(".project-entry:last").append(HTMLprojectImage.replace(data, projects.projects[i].images));
    $(".project-entry:last").append(HTMLprojectGithub.replace("#",projects.projects[i].github).replace(data, projects.projects[i].github));


  }
};

projects.display();

var work = {
  "jobs": [{
    "employer": "Swarovski",
    "title": "Store Manager",
    "location": "Atlanta, GA",
    "dates": "July 2014 - Present",
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

//work display function
work.display = function() {
  for (var i = 0; i < work.jobs.length; i ++) {
    $("#workExperience").append(HTMLworkStart);
    var data = "%data%";

    var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);


    $(".work-entry:last").append(HTMLworkLocation.replace(data, work.jobs[i].location));
    $(".work-entry:last").append(HTMLworkDates.replace(data, work.jobs[i].dates));
    $(".work-entry:last").append(HTMLworkDescription.replace(data, work.jobs[i].description));

  }

};

work.display();


//Internationalize Names:
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

//adds a map with work history
$("#mapDiv").append(googleMap);
