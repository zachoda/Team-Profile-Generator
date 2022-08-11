const generateManager = (Manager) => {
  console.log(Manager.name);
  return `
        <div class="card">
        <div class="card-body">
        <h1 class="card-title">${Manager.name}; Manager</h1>
        <p> Employee ID: ${Manager.id}</p>
        <p><a href="mailto:${Manager.email}"> Email:${Manager.email}</a></p>
        <p> Office Number: ${Manager.officeNumber}</p>
    `;
};

const generateEngineer = (engineerArray) => {
  let returnValue = '';
  console.log(engineerArray);
  engineerArray.forEach(engineer => {
    returnValue = returnValue + `
          <div class="card">
          <div class="card-body">
          <h1 class="card-title">${engineer.name}; Engineer</h1>
          <p> Employee ID: ${engineer.id}</p>
          <p><a href="mailto:${engineer.email}"> Email:${engineer.email}</a></p>
          <p><a href="github.com/${engineer.github}"> Github: ${engineer.github}</a></p>
          </div>
          </div>
          `;
  });
  return returnValue;
};

const generateIntern = (internArray) => {
  let returnValue = '';
  internArray.forEach(intern => {
    returnValue = returnValue +
   `
        <div class="card">
        <div class="card-body">
        <h1 class="card-title">${intern.name}; Intern</h1>
        <p> Employee ID: ${intern.id}</p>
        <p><a href="mailto:${intern.email}"> Email:${intern.email}</a></p>
        <p> School: ${intern.school}</p>
        </div>
        </div>
        `;
      });
      return returnValue;
};

module.exports = (managerValue, engineerArray, internArray) => {
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
     ${generateManager(managerValue)}
     ${generateEngineer(engineerArray)}
     ${generateIntern(internArray)}
     </div>
     </body>
     </html>
     `;
    };
    
