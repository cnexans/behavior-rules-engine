"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
class NumberNode extends types_1.Evaluable {
    constructor(options) {
        super();
        this.number = options.number;
    }
    evaluate() {
        return Number(this.number);
    }
}
exports.Number = NumberNode;
