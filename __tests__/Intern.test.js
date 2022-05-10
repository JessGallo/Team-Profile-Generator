const { exportAllDeclaration } = require('@babel/types');
const Intern = require('../lib/Intern');

test ('creates an Intern object', () => {
    const intern = new Intern('Jessica', 1, 'jessica@gmail.com', 'UHD');

    expect(intern.school).toEqual(expect.any(String));
})