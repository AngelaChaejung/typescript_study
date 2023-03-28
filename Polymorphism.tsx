type SuperPrint = {
  <T>(arr: T[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);

type SuperPrint1 = {
  <T,M>(a: T[], b:M): T;
};

const superPrint1: SuperPrint1 = (arr) => arr[0];

const b = superPrint1([1, 2, 3, 4],"");
const c = superPrint1([true, false, true],1);
const d = superPrint1(["a", "b", "c"],true);
const e = superPrint1([1, 2, true, false],[]);
