const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('Jessica', 1, 'jessica@gmail.com', 'JessGallo');

    expect(engineer.github).toEqual(expect.any(String));
});