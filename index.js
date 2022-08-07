const fs = require("fs");
const generateHTML = require("./src/page-template");
const inquirer = require("inquirer");

const questionsManager = inquirer.prompt([
  {
    type: "input",
    name: "managerName",
    message: "What is your manager's name?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is your manager's employee ID number?",
  },
  {
    type:"input",
    name: "managerEmail",
    message: "What is your manager's email address?",
  },
  {
    type: "input",
    name: "office",
    message:"What is your manager's office number?",
  },
  {
    type:"list",
    name:"managerRole",
    message:"Would you like to add an engineer's data, intern's data, or finish building the roster?",
    choices: ["Add an Engineer", "Add an Intern", "Finish Roster"],
  }
])
.then((result) => {
    if(result.managerRole === "Add an Intern"){
        questionsIntern()
    } else if(result.managerRole === "Add an Engineer") {
        questionsEngineer();
    } else createHTML();
});
questionsManager();

var questionsEngineer = function() { inquirer.prompt([
    {
        type:"input",
        name:"engineerName",
        message:"What is your engineer's name?",
    },

    {
        type:"input",
        name:"engineerId",
        message:"What is your engineer's employee ID number?",
    },
    {
        type:"input",
        name:"engineerEmail",
        message:"What is your engineer's email address?",
    },
    {
        type:"input",
        name:"github",
        message:"What is your engineer's GitHub username?",
    },
    {
        type:"list",
        name:"engineerRole",
        message:"Would you like to add another engineer's data, an intern's data, or finish building the roster?",
        choices:["Add an Engineer", "Add an Intern", "Finish Roster"],
    }
])
.then((result) => {
    if(result.engineerRole === "Add an Intern"){
        questionsIntern()
    } else if(result.engineerRole === "Add an Engineer") {
        questionsEngineer();
    } else createHTML();
})
};


var questionsIntern = function() { inquirer.prompt ([
    {
        type:"input",
        name:"internName",
        message:"What is your intern's name?",
    },

    {
        type:"input",
        name:"internId",
        message:"What is your intern's employee ID number?",
    },
    {
        type:"input",
        name:"internEmail",
        message:"What is your intern's email address?",
    },
    {
        type:"input",
        name:"school",
        message:"Where does your intern go to school?",
    },
    {
        type:"list",
        name:"internRole",
        message:"Would you like to add another intern's data, an engineer's data, or finish building the roster?",
        choices:["Add an Intern", "Add an Engineer", "Finish Roster"],
    }
])
.then((result) => {
    if(result.internRole === "Add an Intern"){
        questionsIntern()
    } else if(result.internRole === "Add an Engineer") {
        questionsEngineer();
    } else createHTML();
});
};

function createHTML() {

}


