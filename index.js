const fs = require('fs');
const inquirer = require('inquirer');
const promptManager = require('./lib/Manager');
const promptEmployee = require('./lib/Employee');
const promptEngineer = require('./lib/Engineer');
const promptIntern = require('./lib/Intern');

promptManager()
.then(promptEmployee)
