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

module.exports = promptEmployee;