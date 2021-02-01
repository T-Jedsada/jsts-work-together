import { start } from "./start";

export const fib = (amount: number): number[] => {
  start();
  let items: number[] = [];
  let n1: number = 0,
    n2: number = 1,
    nextTerm: number;

  for (let i = 1; i <= amount; i++) {
    items.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return items;
};
