import { Scope } from './scope';
import {
  Addition,
  Substraction,
  Multiplication,
  Division,
  Exponentiation
} from './operations';
import { Print } from './side-effects';
import { Evaluable } from '../evaluable/types';

interface BodyOptions {
  instructions: Array<Evaluable>;
}

class Body {
  instructions: Array<Evaluable>;
  scope: Scope;

  constructor(options: BodyOptions) {
    this.instructions = options.instructions;
    this.scope = new Scope();
    this.initializeScope();
  }

  initializeScope(): void {
    this.scope.set('+', Addition);
    this.scope.set('-', Substraction);
    this.scope.set('*', Multiplication);
    this.scope.set('/', Division);
    this.scope.set('^', Exponentiation);
    this.scope.set('print', Print);
  }

  evaluate(): void {
    const scope = this.scope;
    const evaluationOptions = { scope };

    this.instructions.forEach(instruction => {
      instruction.evaluate(evaluationOptions);
    });
  }
}

export { Body }
