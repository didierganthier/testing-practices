const stringLength = require("./stringLength");

it('returns the length of a string', () => {
    expect(stringLength('hello')).toBe(5);
});

it('throws an error if the string is too long', () => {
    expect(() => stringLength('hello world')).toThrow();
});

it('throws an error if the string is too short', () => {
    expect(() => stringLength('')).toThrow();
});