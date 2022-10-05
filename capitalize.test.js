const capitalize = require('./capitalize');

it('should capitalize a string', () => {
    expect(capitalize("hello")).toBe("Hello");
})