class Calculator {
    constructor() {
        this.add = (a, b) => a + b;
        this.subtract = (a, b) => a - b;
        this.multiply = (a, b) => a * b;
        this.divide = (a, b) => a / b;
    }
}

module.exports = Calculator;