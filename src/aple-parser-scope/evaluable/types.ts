import { Scope } from '../program/scope';

interface EvaluationOptions {
  scope: Scope;
}

class Evaluable {
  evaluate(options: EvaluationOptions): any {};
}

declare type Primitive = Number;

export { Evaluable, Primitive, EvaluationOptions };
