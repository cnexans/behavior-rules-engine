import { Evaluable, EvaluationOptions } from "./types";

interface FunctionEvaluationOptions extends EvaluationOptions {
  args: Array<any>
}

interface EvaluableFunctionOptions {
  fn: Function;
}

class EvaluableFunction extends Evaluable {
  fn: Function;

  constructor(options: EvaluableFunctionOptions) {
    super();
    this.fn = options.fn;
  }

  evaluate(options: FunctionEvaluationOptions) {
    const scope = options.scope;
    const args = options.args;
    const evaluatedArgs = args.map(arg =>
      arg.evaluate({ scope })
    );

    return this.fn(evaluatedArgs);
  }
}

export { EvaluableFunction, FunctionEvaluationOptions };
