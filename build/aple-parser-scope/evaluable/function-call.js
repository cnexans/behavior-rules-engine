"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
class FunctionCall extends types_1.Evaluable {
    constructor(options) {
        super();
        this.functionName = options.functionName;
        this.args = options.args;
    }
    evaluate(options) {
        const scope = options.scope;
        const fn = scope.get(this.functionName);
        const args = this.args;
        return fn.evaluate({ scope, args });
    }
}
exports.FunctionCall = FunctionCall;
