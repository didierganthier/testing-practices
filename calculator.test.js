const Calculator = require("./calculator");

const calculator = new Calculator

describe('calculator', () => {
    test('should add two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    test('should subtract two numbers', () => {
        expect(calculator.subtract(3, 2)).toBe(1);
    });
    test('should multiply two numbers', () => {
        expect(calculator.multiply(3, 2)).toBe(6);
    });
    test('should divide two numbers', () => {
        expect(calculator.divide(6, 2)).toBe(3);
    });
});