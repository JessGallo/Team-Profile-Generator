const fs = require('fs');
const inquirer = require('inquirer');

function promptEmployee() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Would you like to add an Engineer or an Intern?',
            choices: [
                'Engineer',
                'Intern'
            ]
        }
    ])
};

function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this employee?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their ID nunber?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter an ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a username!');
                    return false;
                }
            }
        }
    ])
};

