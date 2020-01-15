import { EvaluableFunction } from '../evaluable/evaluable-function';

const Print = new EvaluableFunction({
  fn: ([arg]: [any]) => console.log(arg)
});

export { Print };