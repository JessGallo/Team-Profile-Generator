const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');

const teamArray = [];

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter a valid ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter a valid email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter an office number!");
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, office } = managerInput;
        const manager = new Manager (name, id, email, office);

        teamArray.push(manager);
    })
};

const promptEmployee = () => {
    console.log(`
    ==========================
    Add employees to the team
    ==========================
    `)
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid ID!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter a valid email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub username?",
            validate: githubInput =>  {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter a valid username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmPromptEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmPromptEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        teamArray.push(employee);

        if (confirmPromptEmployee) {
            return promptEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been successfully created!");
        }
    })
}; 

const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };

promptUser()
.then(promptEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
})