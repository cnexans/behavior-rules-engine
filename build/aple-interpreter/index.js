"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// @ts-ignore
const aple_parser_1 = require("../aple-parser");
// @ts-ignore
const Scope = tslib_1.__importStar(require("../aple-parser-scope/"));
aple_parser_1.parser.yy = Scope;
const parse = (input) => aple_parser_1.parser.parse(input);
exports.parse = parse;
const interpret = (input) => parse(input).evaluate();
exports.interpret = interpret;
parse('let a := 123');
