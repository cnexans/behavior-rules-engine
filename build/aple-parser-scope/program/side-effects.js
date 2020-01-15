"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evaluable_function_1 = require("../evaluable/evaluable-function");
const Print = new evaluable_function_1.EvaluableFunction({
    fn: ([arg]) => console.log(arg)
});
exports.Print = Print;
