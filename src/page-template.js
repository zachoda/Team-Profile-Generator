

//create a for going through all of the created arrays

const generateManager = (managerArray) => {
  if (!managerArray) {
    return "";
  }
  return `
        <div class="card">
        <div class="card-body">
        <h1 class="card-title">${result.managerName}; Manager</h1>
        <p> Employee ID: ${result.managerId}</p>
        <p><a href="mailto:${result.managerEmail}> Email:${result.managerEmail}</a></p>
        <p> Office Number: ${result.office}</p>
    `;
};

const generateEngineer = (engineerArray) => {
    for(i=0; i<engineerArray.length; i++) {
        if(!engineerArray) {
            return "";
        }
        return `
        <div class="card">
        <div class="card-body">
        <h1 class="card-title">${result.engineerName}; Engineer</h1>
        <p> Employee ID: ${result.engineerId}</p>
        <p><a href="mailto:${result.engineerEmail}> Email:${result.engineerEmail}</a></p>
        <p><a href="github.com/${result.github}> Github: ${result.github}</a></p>
        `
    }
};

const generateIntern = (internArray) => {
    for(i=0; i<internArray.length; i++) {
        if(!internArray) {
            return "";
        }
        return `
        <div class="card">
        <div class="card-body">
        <h1 class="card-title">${result.internName}; Engineer</h1>
        <p> Employee ID: ${result.internId}</p>
        <p><a href="mailto:${result.internEmail}> Email:${result.internEmail}</a></p>
        <p> School: ${result.school}</p>
        `
    }
};

module.exports = (templateData) => {
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
     <div class="container">
     ${generateManager}
     </div>
    </body>
    </html>
    `;
};
