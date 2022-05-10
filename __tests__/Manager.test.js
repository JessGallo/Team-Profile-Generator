const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Jessica', 1, 'jessica@gmail.com', 101);

    expect(manager.office).toEqual(expect.any(Number));
});