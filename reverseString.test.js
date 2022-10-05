const reverseString = require('./reverseString');

it('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});