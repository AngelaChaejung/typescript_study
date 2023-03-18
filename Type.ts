type Age = number;
type Name = string;

type Player = {
  name: Name;
  age?: Age;
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const nico = playerMaker("nico");
nico.age = 12;
