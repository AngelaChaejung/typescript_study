var 회원들 = ["kim", "park"];
var member = { member1: "kim", member2: "park" };
var 회원 = [123];
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
var 해보기 = [1, "2", 3];
var 오브젝트 = { a: 123 };
var 네임;
네임 = 1234;
네임 = "dddd";
//any는 타입쉴드 해제문법. 타입스크립트를 쓰는 이유를 잃음
var 나이 = 1; //union type에선 +가 안됨. 지금 변경하려는 변수의 타입이 확실해야 연산을 수행해줍니다.
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
function 함수(a) {
    return a * 2;
}
함수(30);
//return하지않을 때, void이용
function 리턴없음(x) {
    console.log("hi");
}
//파라미터의 타입이 지정되면 파라미터를 필수적으로 넣어야한다.
//?를 넣어 옵셔널타입을 하면 a?:number 는 a:number|undefined 랑 같다.
function 숙제1(a) {
    if (a) {
        console.log("안녕하세요");
    }
    else {
        console.log("이름이 없습니다");
    }
}
function 숙제2(a) {
    return a.toString().length;
}
// function 결혼(월소득: number, 집보유: boolean, 매력점수: string): string {
//   let point: number = 월소득;
//   if (집보유) {
//     point += 500;
//   }
//   if (매력점수 === "상") {
//     point += 100;
//   }
//   if (point >= 600) {
//     return "결혼가능";
//   }
// }
function 내함수(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    else {
    }
}
내함수(123);
var animal = { name: "happy", age: 2 };
var 출생지역 = { region: "seoul" };
출생지역.region = "busan";
var 여친 = {
    name: "엠버",
};
var position = { x: 1, y: 30 };
//literal type
var 이름;
이름 = "kim";
//미리 들어올 수 있는 자료를 정해놓는 문법
var me;
//literal type쓰는 이유 1. 변수에 뭐가 들어올지 더 엄격하게 관리가능 2. 자동완성
function 함(a) {
    return 0;
}
함("hello");
//가위,바위,보 중 1개 입력가능
//가위,바위,보 만 들어올 수 있는 array를 return해야 함.
function 가위바위보(a) {
    return ["가위"];
}
var 변수 = "kim";
var 자료 = {
    이름: "kim",
};
//object를 잠그고 싶을 땐 as const를 쓴다.
//as const는 이 object는 literal type지정 알아서 해주세요하는 효과. 그리고 object속성들에 모두 readonly를 붙여주는 효과.
자료.이름;
function myfunction(a) { }
myfunction("kim");
myfunction(자료.이름);
// 1. 함수타입은 ()=>{} 화살표함수로 만든다.
//2. 함수에 타입지정을 할 땐 함수표현식의 방식으로 작성한다. (함수 표현식에만 type alias사용가능 )
var 함수2 = function (a) {
    return 10;
};
//object 안에 함수 만들 수 있음.
var 회원정보 = {
    name: "kim",
    //object 안에있는 함수 타입지정은 어떻게?
    pluseOne: function (a) {
        return a + 1;
    },
    함수3: function (b) {
        b + b;
    },
};
회원정보.pluseOne(3);
회원정보.함수3("야");
//콜백함수
function 함1(a) {
    a();
}
function 함2() { }
함1(함2); // <- 여기서 함2를 콜백함수라고 한다. 함수가 실행되고나서 실행되는 함수 (순차적으로)
var removeDash = function (b) {
    var answer = b.replace(/-/g, "");
    return parseFloat(answer);
};
var Afunction = function (a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    return result2;
};
// Afunction("010-8329-8599", cutZero, removeDash);
