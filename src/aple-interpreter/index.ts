// @ts-ignore
import { parser } from '../aple-parser';

// @ts-ignore
import * as Scope from '../aple-parser-scope/';

parser.yy = Scope;

const parse = (input: String) => parser.parse(input);
const interpret = (input: String) => parse(input).evaluate();

parse('let a := 123')

export {
  parse,
  interpret,
}