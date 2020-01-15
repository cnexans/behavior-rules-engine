"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../evaluable/types");
class VariableDeclaration extends types_1.Evaluable {
    constructor(options) {
        super();
        this.name = options.name;
        this.value = options.value;
    }
    evaluate(options) {
        options.scope.set(this.name, this.value);
    }
}
exports.VariableDeclaration = VariableDeclaration;
