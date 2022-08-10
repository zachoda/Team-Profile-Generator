

//create a for going through all of the created arrays
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateManager = (managerArray) => {
 
  return `
        <div class="card">
        <div class="card-body">
        <h1 class="card-title">${Manager.name}; Manager</h1>
        <p> Employee ID: ${Manager.id}</p>
        <p><a href="mailto:${Manager.email}"> Email:${Manager.email}</a></p>
        <p> Office Number: ${Manager.officeNumber}</p>
    `;
};
console.log(managerArray.name);

const generateEngineer = (engineerArray) => {
    
    let cardsEngineer = '';

    for(i=0; i < engineerArray.length; i++) {
        cardsEngineer = cardsEngineer + `
        <div class="card">
        <div class="card-body">
        <h1 class="card-title">${Engineer.name[i]}; Engineer</h1>
        <p> Employee ID: ${Engineer.id[i]}</p>
        <p><a href="mailto:${Engineer.email[i]}"> Email:${Engineer.email[i]}</a></p>
        <p><a href="github.com/${Engineer.github[i]}> Github: ${Engineer.github[i]}</a></p>
        `
    }
    return cardsEngineer;
};

const generateIntern = (internArray) => {

    let cardsIntern = '';

    for(i=0; i < internArray.length; i++) {
        
        cardsIntern = cardsIntern + `
        <div class="card">
        <div class="card-body">
        <h1 class="card-title">${Intern.name}; Engineer</h1>
        <p> Employee ID: ${Intern.id}</p>
        <p><a href="mailto:${Intern.email}"> Email:${Intern.email}</a></p>
        <p> School: ${Intern.school}</p>
        `
    }
    return cardsIntern;
};

module.exports = (managerArray, internArray, engineerArray) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
     <div class= "container">
     ${generateManager(managerArray)}
     ${generateEngineer(engineerArray)}
     ${generateIntern(internArray)}
     </div>
    </body>
    </html>
    `;
};
