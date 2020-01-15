"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scope_1 = require("./scope");
const operations_1 = require("./operations");
const side_effects_1 = require("./side-effects");
class Body {
    constructor(options) {
        this.instructions = options.instructions;
        this.scope = new scope_1.Scope();
        this.initializeScope();
    }
    initializeScope() {
        this.scope.set('+', operations_1.Addition);
        this.scope.set('-', operations_1.Substraction);
        this.scope.set('*', operations_1.Multiplication);
        this.scope.set('/', operations_1.Division);
        this.scope.set('^', operations_1.Exponentiation);
        this.scope.set('print', side_effects_1.Print);
    }
    evaluate() {
        const scope = this.scope;
        const evaluationOptions = { scope };
        this.instructions.forEach(instruction => {
            instruction.evaluate(evaluationOptions);
        });
    }
}
exports.Body = Body;
