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
function 결혼(월소득, 집보유, 매력점수) {
    var point = 월소득;
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
