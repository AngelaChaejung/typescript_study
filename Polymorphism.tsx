type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);

type SuperPrint1 = {
  <TypePlaceholder1>(arr: TypePlaceholder1[]): TypePlaceholder1;
};

const superPrint1: SuperPrint1 = (arr) => arr[0];

const b = superPrint1([1, 2, 3, 4]);
const c = superPrint1([true, false, true]);
const d = superPrint1(["a", "b", "c"]);
const e = superPrint1([1, 2, true, false]);
