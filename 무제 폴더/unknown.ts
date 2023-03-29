let a: unknown;
if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a.toUpperCase();
}

function hello() {
  console.log("x");
}

function hi(): never {
  throw new Error("xxx");
}

function z(name: string | number) {
  if (typeof name === "string") {
  } else if (typeof name == "number") {
  } else {
    name;
  }
}
