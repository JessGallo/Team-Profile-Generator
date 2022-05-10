const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jessica', 1, 'jessica@gmail.com', 101);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});