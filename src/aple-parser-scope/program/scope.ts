import { Evaluable } from '../evaluable/types';

interface Dictionary {
  [x: string]: Evaluable;
}

class Scope {
  private content: Dictionary = {};

  set(name: string, value: Evaluable): void {
    this.content[name] = value;
  }

  get(name: string): Evaluable {
    return this.content[name];
  }
}

export { Scope }
