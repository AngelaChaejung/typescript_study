let 회원들: string[] = ["kim", "park"];

let member: { member1: string; member2: string } = { member1: "kim", member2: "park" };

let 회원 = [123];

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let 해보기: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 123 };

let 네임: unknown;
네임 = 1234;
네임 = "dddd";

//any는 타입쉴드 해제문법. 타입스크립트를 쓰는 이유를 잃음

let 나이: unknown = 1; //union type에선 +가 안됨. 지금 변경하려는 변수의 타입이 확실해야 연산을 수행해줍니다.

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: [string, undefined | number, boolean] = [user, age, married];

let 학교: { score: (number | boolean)[]; teacher: string; friend: string | string[] } = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

function 함수(a: number): number {
  return a * 2;
}
함수(30);
//return하지않을 때, void이용
function 리턴없음(x: number): void {
  console.log("hi");
}
//파라미터의 타입이 지정되면 파라미터를 필수적으로 넣어야한다.
//?를 넣어 옵셔널타입을 하면 a?:number 는 a:number|undefined 랑 같다.

function 숙제1(a?: string): void {
  if (a) {
    console.log("안녕하세요");
  } else {
    console.log("이름이 없습니다");
  }
}

function 숙제2(a: string | number): number {
  return a.toString().length;
}

function 결혼(월소득: number, 집보유: boolean, 매력점수: string): string {
  let point: number = 월소득;
  if (집보유) {
    point += 500;
  }
  if (매력점수 === "상") {
    point += 100;
  }
  if (point >= 600) {
    return "결혼가능";
  }
}

function 내함수(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
  }
}
내함수(123);

type AnimalType = { name: string; age: number };

let animal: AnimalType = { name: "happy", age: 2 };

const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

type Girlfirend = {
  name?: string;
};
const 여친: Girlfirend = {
  name: "엠버",
};
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY;

let position: NewType = { x: 1, y: 30 };

// object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type Angela = { a: string };
type Jella = { a: number };

type Jellatube = Angela & Jella;

//object자료형, color라는 속성을 가질 수도있음, 항상 문자. size라는 속성이 있음 항상 숫자.
//position이라는 변경불가능한 속성이 있음 항상 숫자가 담긴 array자료

type Sookje = { color?: string; size: number; readonly position: number[] };

type Saram = { name: string; phone: number; email: string; adult: boolean };

//literal type
let 이름: "kim";

이름 = "kim";
//미리 들어올 수 있는 자료를 정해놓는 문법

let me: "대머리" | "솔로";
//literal type쓰는 이유 1. 변수에 뭐가 들어올지 더 엄격하게 관리가능 2. 자동완성

function 함(a: "hello"): 1 | 0 {
  return 0;
}
함("hello");

//가위,바위,보 중 1개 입력가능
//가위,바위,보 만 들어올 수 있는 array를 return해야 함.

function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

const 변수 = "kim";

var 자료 = {
  이름: "kim",
} as const;
//object를 잠그고 싶을 땐 as const를 쓴다.
//as const는 이 object는 literal type지정 알아서 해주세요하는 효과. 그리고 object속성들에 모두 readonly를 붙여주는 효과.
자료.이름;
function myfunction(a: "kim") {}
myfunction("kim");
myfunction(자료.이름);

//4APR
type 함수타입 = (a: string) => number;
// 1. 함수타입은 ()=>{} 화살표함수로 만든다.
//2. 함수에 타입지정을 할 땐 함수표현식의 방식으로 작성한다. (함수 표현식에만 type alias사용가능 )
let 함수2: 함수타입 = function (a) {
  return 10;
};

//object 안에 함수 만들 수 있음.
let 회원정보 = {
  name: "kim",
  //object 안에있는 함수 타입지정은 어떻게?
  pluseOne(a: number) {
    return a + 1;
  },
  함수3: (b: string) => {
    b + b;
  },
};
회원정보.pluseOne(3);
회원정보.함수3("야");

//콜백함수

function 함1(a) {
  a();
}
function 함2() {}
함1(함2); // <- 여기서 함2를 콜백함수라고 한다. 함수가 실행되고나서 실행되는 함수 (순차적으로)
//함수1실행해주세요-> 함수1내부 코드 a() 실행됨. 근데 파라미터를 a자리에 넣어서 함2() 실행됨.

type Member = {
  name: string;
  age: number;
  pluseOne: (x: number) => number;
  changeName: () => void;
};

type CutZero = (a: string) => string;
const cutZero: CutZero = (a) => {
  if (a[0] === "0") {
    return a.slice(1, -1);
  }
};
console.log(cutZero("012345"));

type RemoveDashType = (b: string) => number;

const removeDash: RemoveDashType = (b) => {
  let answer = b.replace(/-/g, "");
  return parseFloat(answer);
};
