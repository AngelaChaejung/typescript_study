type Player_<E> = {
  name: string;
  extrainfo: E;
};
type AngelaExtra = {
  favoFood: string;
};
type AngelaPlayer = Player_<AngelaExtra>;
const angela: AngelaPlayer = {
  name: "Angela",
  extrainfo: {
    favoFood: "pasta",
  },
};

const luke: Player_<null> = {
  name: "Luke",
  extrainfo: null,
};

type Example = Array<number>;
let example: Example = [1, 2, 3, 4, 5];
