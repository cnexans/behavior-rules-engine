import { EvaluableFunction } from "../evaluable/evaluable-function";

const Addition = new EvaluableFunction({
  fn: ([a, b]: [number, number]) => a + b
});

const Substraction = new EvaluableFunction({
  fn: ([a, b]: [number, number]) => a - b
});

const Multiplication = new EvaluableFunction({
  fn: ([a, b]: [number, number]) => a * b
});

const Exponentiation = new EvaluableFunction({
  fn: ([a, b]: [number, number]) => a ** b
});

const Division = new EvaluableFunction({
  fn: ([a, b]: [number, number]) => a / b
});

export {
  Addition,
  Substraction,
  Multiplication,
  Exponentiation,
  Division,
}