class Employee {
    constructor(name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
}

// function promptEmployee() {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'role',
//             message: 'Would you like to add an Engineer or an Intern?',
//             choices: [
//                 'Engineer',
//                 'Intern'
//             ]
//         }
//     ])
// }

module.exports = Employee;