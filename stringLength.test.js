const stringLength = require("./stringLength");

it('returns the length of a string', () => {
    expect(stringLength('hello')).toBe(5);
});