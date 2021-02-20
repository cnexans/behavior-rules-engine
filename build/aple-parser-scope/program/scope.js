"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scope {
    constructor() {
        this.content = {};
    }
    set(name, value) {
        this.content[name] = value;
    }
    get(name) {
        return this.content[name];
    }
}
exports.Scope = Scope;
