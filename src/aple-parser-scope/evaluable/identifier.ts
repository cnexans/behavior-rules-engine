import { Evaluable, EvaluationOptions } from "./types";

interface IdentifierOptions {
  name: string;
}

class Identifier extends Evaluable {
  name: string;

  constructor(options: IdentifierOptions) {
    super();
    this.name = options.name;
  }

  evaluate(options: EvaluationOptions) {
    const scope = options.scope;
    return scope.get(this.name).evaluate({ scope });
  }
}

export { Identifier }
