"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
class Identifier extends types_1.Evaluable {
    constructor(options) {
        super();
        this.name = options.name;
    }
    evaluate(options) {
        const scope = options.scope;
        return scope.get(this.name).evaluate({ scope });
    }
}
exports.Identifier = Identifier;
