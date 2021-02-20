"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
class EvaluableFunction extends types_1.Evaluable {
    constructor(options) {
        super();
        this.fn = options.fn;
    }
    evaluate(options) {
        const scope = options.scope;
        const args = options.args;
        const evaluatedArgs = args.map(arg => arg.evaluate({ scope }));
        return this.fn(evaluatedArgs);
    }
}
exports.EvaluableFunction = EvaluableFunction;
