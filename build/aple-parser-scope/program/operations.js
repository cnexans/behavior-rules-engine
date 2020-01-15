"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evaluable_function_1 = require("../evaluable/evaluable-function");
const Addition = new evaluable_function_1.EvaluableFunction({
    fn: ([a, b]) => a + b
});
exports.Addition = Addition;
const Substraction = new evaluable_function_1.EvaluableFunction({
    fn: ([a, b]) => a - b
});
exports.Substraction = Substraction;
const Multiplication = new evaluable_function_1.EvaluableFunction({
    fn: ([a, b]) => a * b
});
exports.Multiplication = Multiplication;
const Exponentiation = new evaluable_function_1.EvaluableFunction({
    fn: ([a, b]) => Math.pow(a, b)
});
exports.Exponentiation = Exponentiation;
const Division = new evaluable_function_1.EvaluableFunction({
    fn: ([a, b]) => a / b
});
exports.Division = Division;
