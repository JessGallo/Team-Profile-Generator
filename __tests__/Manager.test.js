const { hasUncaughtExceptionCaptureCallback } = require('process');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});