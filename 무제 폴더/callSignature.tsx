function add(a: number, b: number) {
  return a + b;
}

const addd = (a: number, b: number) => a + b;

type A = (a: number, b: number) => number;

const a: A = (a, b) => a + b;
