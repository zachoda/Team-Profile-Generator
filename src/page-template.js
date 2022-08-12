const generateManager = (Manager) => {
  console.log(Manager.name);
  return `
        <div class="card text-bg-light mb-3">
        <div class="card-header"</div>
        <div class="card-body">
        <h1 class="card-title">${Manager.name}; Manager</h1>
        <p class="card-text"> Employee ID: ${Manager.id}</p>
        <p class="card-text"><a href="mailto:${Manager.email}"> Email:${Manager.email}</a></p>
        <p class="card-text"> Office Number: ${Manager.officeNumber}</p>
        </div>
        </div>
    `;
};

const generateEngineer = (engineerArray) => {
  let returnValue = "";
  console.log(engineerArray);
  engineerArray.forEach((engineer) => {
    returnValue =
      returnValue +
      `
          <div class="card text-bg-light mb-3">
          <h1 class="card-header">${engineer.name}; Engineer</h1>
          <div class="card-body">
          <p class="card-text"> Employee ID: ${engineer.id}</p>
          <p class="card-text"><a href="mailto:${engineer.email}"> Email:${engineer.email}</a></p>
          <p class="card-text"><a href="github.com/${engineer.github}"> Github: ${engineer.github}</a></p>
          </div>
          </div>
          `;
  });
  return returnValue;
};

const generateIntern = (internArray) => {
  let returnValue = "";
  internArray.forEach((intern) => {
    returnValue =
      returnValue +
      `
        <div class="card text-bg-light mb-3">
        <h1 class="card-header">${intern.name}; Intern</h1>
        <div class="card-body">
        <p class="card-text"> Employee ID: ${intern.id}</p>
        <p class="card-text"><a href="mailto:${intern.email}"> Email:${intern.email}</a></p>
        <p class="card-text"> School: ${intern.school}</p>
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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css
      ">
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
