import { Evaluable, EvaluationOptions } from '../evaluable/types';

interface VariableDeclarationOptions {
  name: string;
  value: Evaluable;
}

class VariableDeclaration extends Evaluable {
  name: string;
  value: Evaluable;

  constructor(options: VariableDeclarationOptions) {
    super();
    this.name = options.name;
    this.value = options.value;
  }

  evaluate(options: EvaluationOptions): void {
    options.scope.set(
      this.name,
      this.value,
    );
  }
}

export { VariableDeclaration };