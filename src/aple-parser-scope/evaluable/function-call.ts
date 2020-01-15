import { Evaluable, EvaluationOptions } from "./types";
import { FunctionEvaluationOptions } from "./evaluable-function";

interface FunctionCallOptions {
  functionName: string;
  args: Array<Evaluable>;
}

class FunctionCall extends Evaluable {
  functionName: string;
  args: Array<Evaluable>;

  constructor(options: FunctionCallOptions) {
    super();
    this.functionName = options.functionName;
    this.args = options.args;
  }

  evaluate(options: EvaluationOptions) {
    const scope = options.scope;
    const fn = scope.get(this.functionName);
    const args = this.args;

    return fn.evaluate({ scope, args } as FunctionEvaluationOptions);
  }
}

export { FunctionCall }
