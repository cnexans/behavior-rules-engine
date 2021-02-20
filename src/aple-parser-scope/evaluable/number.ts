import { Evaluable } from './types';

interface NumberOptions {
  number: String;
}

class NumberNode extends Evaluable {
  number: String;

  constructor(options: NumberOptions) {
    super();
    this.number = options.number;
  }

  evaluate(): number {
    return Number(this.number);
  }
}

export { NumberNode as Number };
